import { computeCSSFromObject } from "./computeCSSFromObject";
import { fileSystemWalker } from "./fileSystemWalker";
import { parseConfig } from "./parseConfig";
import { parseFileContent } from "./parseFileContent";
import { parseNestedObjClasses } from "./parseNestedObjClasses";

interface ComputeObjectType {
    __staticStyles: string;
    __dynamicStyles: string;
    __configStyles: string;
}

const __dir = ".";
const __types = [".js", ".jsx", ".ts", ".tsx", ".html"];

const computeObjectStyles = (): ComputeObjectType => {
    const __galadrielConfig = parseConfig();
    const __toExclude = __galadrielConfig?.exclude || [];
    const __systemFiles = fileSystemWalker(__dir, __types, __toExclude);

    const __staticStyles: string[] = [];

    for (const __file of __systemFiles) {
        try {
            const __parsedContent = parseFileContent(__file);
            console.log(__parsedContent)

            if (__parsedContent) {
                __parsedContent.forEach((__obj) => {
                    Object.entries(__obj).forEach(([__key, __value]) => {
                        if (Array.isArray(__value)) {
                            __value.forEach((__nestedValue) => {
                                Object.entries(__nestedValue).forEach(
                                    ([__nestedObjKey, __nestedObjValue]) => {
                                        parseNestedObjClasses(
                                            __key,
                                            __nestedObjKey,
                                            __nestedObjValue
                                        );
                                    }
                                );
                            });
                        } else {
                            const __cssClassString = computeCSSFromObject(
                                __key,
                                __value
                            );

                            if (
                                __cssClassString &&
                                !__staticStyles.includes(__cssClassString)
                            ) {
                                __staticStyles.push(__cssClassString);
                            }
                        }
                    });
                });
            }
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    return {
        __staticStyles: __staticStyles.join(" "),
        __dynamicStyles: "",
        __configStyles: "",
    };
};

export { computeObjectStyles };
