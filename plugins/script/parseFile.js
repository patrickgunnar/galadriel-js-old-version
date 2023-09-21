const fs = require("fs");
const acorn = require("acorn");
const { ScriptTarget, createSourceFile } = require("typescript");

const { extractJSObjects } = require("./extractJSObjects");
const { extractTSObjects } = require("./extractTSObjects");
const { extractJSFromHTML } = require("./extractJSFromHTML");

const parseFile = (filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Determine the file type based on extension
    const extension = filePath.split(".").pop().toLowerCase();

    if (extension === "js" || extension === "jsx") {
        // Parse JavaScript/JSX
        const ast = acorn.parse(fileContent, {
            ecmaVersion: "latest",
            sourceType: "module",
        });

        // Call the extractJSObjects
        return extractJSObjects(ast);
    } else if (extension === "ts" || extension === "tsx") {
        // Parse TypeScript/TSX
        const sourceFile = createSourceFile(
            filePath,
            fileContent,
            ScriptTarget.Latest
        );

        // Call the extractTSObjects
        return extractTSObjects(sourceFile);
    } else if (extension === "html") {
        // Extract objects from HTML
        const extractedJs = extractJSFromHTML(fileContent);
        // Parse JavaScript/JSX
        const ast = acorn.parse(extractedJs, {
            ecmaVersion: "latest",
            sourceType: "module",
        });

        // Call the extractJSObjects
        return extractJSObjects(ast);
    } else {
        console.log("Unsupported file type:", extension);

        return null;
    }
};

module.exports = { parseFile };
