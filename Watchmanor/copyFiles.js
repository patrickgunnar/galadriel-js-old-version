const fs = require("fs");
const path = require("path");

const filesToCopy = ["index.html", "galadriel.css"];
const sourceFolder = ".";
const distFolder = "./dist";

const copyFiles = () => {
    // Ensure the destination folder exists, create it if necessary
    if (!fs.existsSync(distFolder)) {
        fs.mkdirSync(distFolder);
    }

    filesToCopy.forEach((file) => {
        const sourceFilePath = path.join(sourceFolder, file);
        const destFilePath = path.join(distFolder, file);
        // Read the file and copy its contents to the destination
        const fileContents = fs.readFileSync(sourceFilePath, "utf8");

        fs.writeFileSync(destFilePath, fileContents);
        console.log(`Copied ${file} to ${distFolder}`);
    });

    console.log("Files copied successfully.");
};

module.exports = { copyFiles };
