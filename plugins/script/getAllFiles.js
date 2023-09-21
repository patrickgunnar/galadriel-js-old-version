const path = require("path");
const fs = require("fs");

const shouldBeExcluded = (name, toExclude) => {
    const currentName = `${name}`;

    return toExclude.some((exclude) => {
        const currentExclude = `${exclude}`;

        return (
            currentName.includes(currentExclude) ||
            currentName.includes(".config") ||
            currentName.includes("config")
        );
    });
};

const getAllFiles = (dir, fileTypes, toExclude) => {
    const files = [];
    const dirents = fs.readdirSync(dir, { withFileTypes: true });

    for (const dirent of dirents) {
        const direntName = dirent.name;
        const fullPath = path.join(dir, direntName);
        const shouldExclude = shouldBeExcluded(direntName, toExclude);
        const endsWith = fileTypes.some((type) => fullPath.endsWith(type));

        if (dirent.isDirectory() && !shouldExclude) {
            files.push(...getAllFiles(fullPath, fileTypes, toExclude));
        } else if (dirent.isFile() && endsWith && !shouldExclude) {
            files.push(fullPath);
        }
    }

    return files;
};

module.exports = { getAllFiles };
