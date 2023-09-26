import { parse } from "acorn";
import fs from "fs";
import { transpileTypeScriptCode } from "./transpileTypeScriptCode";
import { extractJavaScriptFromHTML } from "./extractJavaScriptFromHTML";
import { traverse } from "./traverse";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);

interface ParsedContent {
    fileContent: string;
    extension: string;
}

const parseFileContent = async (
    filePath: string
): Promise<ParsedContent | null> => {
    try {
        const fileContent = await readFileAsync(filePath, "utf-8");
        const parts = filePath.split(".");
        const extension = parts.length > 1 ? parts.pop()!.toLowerCase() : "";

        return { fileContent, extension };
    } catch (error) {
        console.error("An error occurred:", error);

        return null;
    }
};

const parseJavaScript = (fileContent: string): any[] => {
    try {
        const ast = parse(fileContent, {
            ecmaVersion: "latest",
            sourceType: "module",
        });

        return traverse(ast);
    } catch (error) {
        console.error("An error occurred:", error);

        return [];
    }
};

const parseTypeScript = (tsString: string): any[] => {
    try {
        const compiledTS = transpileTypeScriptCode(tsString);
        const ast = parse(compiledTS, {
            ecmaVersion: 2020,
            sourceType: "module",
        });

        return traverse(ast);
    } catch (error) {
        console.error("An error occurred:", error);

        return [];
    }
};

const parseHTML = (htmlContent: string): any[] => {
    try {
        const extractedObj = extractJavaScriptFromHTML(htmlContent);
        const ast = parse(extractedObj, {
            ecmaVersion: "latest",
            sourceType: "module",
        });

        return traverse(ast);
    } catch (error) {
        console.error("An error occurred:", error);

        return [];
    }
};

const parseFiles = async (filePath: string): Promise<any[]> => {
    const parsedContent = await parseFileContent(filePath);

    if (!parsedContent) {
        console.error(`Failed to parse content for file: ${filePath}`);

        return [];
    }

    const { fileContent, extension } = parsedContent;

    switch (extension) {
        case "js":
        case "jsx":
            return parseJavaScript(fileContent);

        case "ts":
        case "tsx":
            return parseTypeScript(fileContent);

        case "html":
            return parseHTML(fileContent);

        default:
            console.log("Unsupported file type:", extension);
            return [];
    }
};

export { parseFiles };
