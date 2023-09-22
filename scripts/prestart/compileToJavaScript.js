const { exec } = require("child_process");

const compileToJavaScript = [
    "scripts/prestart/intellisenseTypes.ts",
    "scripts/dynamicStylesObject.ts",
    "scripts/genGaladrielTypes.ts",
    "scripts/extractGaladrielClasses.ts",
];

compileToJavaScript.forEach((pattern) => {
    exec(`tsc ${pattern} --outDir builds`, (error, stdout, stderr) => {
        if (error) {
            console.error(
                `Error compiling files matching pattern ${pattern}: ${stderr}`
            );
        } else {
            console.log(`Compiled files matching pattern ${pattern}`);
        }
    });
});
