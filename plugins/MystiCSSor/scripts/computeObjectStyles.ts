import { computeCSSFromObject } from "./computeCSSFromObject";
import { fileSystemWalker } from "./fileSystemWalker";
import { parseConfig } from "./parseConfig";
import { parseFiles } from "./parseFiles";
import { parseNestedObjClasses } from "./parseNestedObjClasses";

interface ComputeObjectType {
    staticStyles: string;
    dynamicStyles: string;
    configStyles: string;
}

const dir = ".";
const types = [".js", ".jsx", ".ts", ".tsx", ".html"];

const computeObjectStyles = async (): Promise<ComputeObjectType> => {
    const { exclude = [], tests = null } = parseConfig();
    const toExclude = exclude || [];
    const testPaths = tests?.test ? [...tests.testPath] : [];
    const { flattenedFiles } = await fileSystemWalker(
        dir,
        types,
        toExclude
    );
    const systemFiles = tests?.test ? testPaths : flattenedFiles;
    const staticStyles: string[] = [];

    const processFilesPromises = systemFiles.map(async (file: string) => {
        try {
            return await parseFiles(file);
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    });

    const parsedContents = await Promise.all(processFilesPromises);

    const processParsedContents = (
        parsedContent: Record<string, any>[]
    ) => {
        if (parsedContent) {
            for (const obj of parsedContent) {
                for (const [key, value] of Object.entries(obj)) {
                    if (value && typeof value === "object") {
                        for (const [
                            nestedKey,
                            nestedValue,
                        ] of Object.entries(value)) {
                            parseNestedObjClasses(
                                key,
                                nestedKey,
                                nestedValue
                            );
                        }
                    } else {
                        const cssClassString = computeCSSFromObject(
                            key,
                            value
                        );

                        if (
                            cssClassString &&
                            !staticStyles.includes(cssClassString)
                        ) {
                            staticStyles.push(cssClassString);
                        }
                    }
                }
            }
        }
    };

    parsedContents.forEach((content) => {
        processParsedContents(content as Record<string, any>[]);
    });

    return {
        staticStyles: staticStyles.join(" "),
        dynamicStyles: "",
        configStyles: "",
    };
};

export { computeObjectStyles };
