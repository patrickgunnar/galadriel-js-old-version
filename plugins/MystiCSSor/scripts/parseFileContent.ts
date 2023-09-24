import { parse } from "acorn";
import fs from "fs";
import { transpileTypeScriptCode } from "./transpileTypeScriptCode";
import { extractJavaScriptFromHTML } from "./extractJavaScriptFromHTML";
import { traverse } from "./traverse";

const parseFileContent = (__path: string): Array<{}> | null => {
    const __fileContent = fs.readFileSync(__path, "utf-8");

    // Determine the file type based on extension
    const __extension = __path.split(".").pop()?.toLocaleLowerCase();

    if (__extension === "js" || __extension === "jsx") {
        try {
            // Parse JavaScript/JSX using acorn parse
            const __ast = parse(__fileContent, {
                ecmaVersion: "latest",
                sourceType: "module",
            });

            return traverse(__ast);
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    } else if (__extension === "ts" || __extension === "tsx") {
        try {
            // Parse TypeScript/TSX
            const __compiledTS = transpileTypeScriptCode(__fileContent);
            // Parse JavaScript/JSX using acorn parse
            const __ast = parse(__compiledTS, {
                ecmaVersion: 2020,
                sourceType: "module",
            });

            return traverse(__ast);
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    } else if (__extension === "html") {
        try {
            // Extract objects from HTML
            const __extractedObj = extractJavaScriptFromHTML(__fileContent);
            // Parse JavaScript/JSX using acorn parse
            const __ast = parse(__extractedObj, {
                ecmaVersion: "latest",
                sourceType: "module",
            });

            return traverse(__ast);
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    } else {
        console.log("Unsupported file type:", __extension);
    }

    return null;
};

export { parseFileContent };
