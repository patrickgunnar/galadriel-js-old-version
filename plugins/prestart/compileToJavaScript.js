const { exec } = require("child_process");

exec("tsc sourceCore/* --outDir plugins/builds", (error, stdout, stderr) => {
    if (error) {
        console.error("Error compiling core files.");
    } else {
        console.log("Compiled core files.");
    }
});
