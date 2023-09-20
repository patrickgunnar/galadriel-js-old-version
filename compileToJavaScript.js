const { exec } = require("child_process");

const compileToJavaScript = [
    "tools/coreStaticStyles.ts",
    "tools/utils/genStaticClasses.ts",
    "tools/utils/dynamicStylesObject.ts",
    "tools/utils/genGaladrielTypes.ts",
    "tools/utils/extractGaladrielClasses.ts",
];

compileToJavaScript.forEach((pattern) => {
    exec(`tsc ${pattern}`, (error, stdout, stderr) => {
        if (error) {
            console.error(
                `Error compiling files matching pattern ${pattern}: ${stderr}`
            );
        } else {
            console.log(`Compiled files matching pattern ${pattern}`);
        }
    });
});
