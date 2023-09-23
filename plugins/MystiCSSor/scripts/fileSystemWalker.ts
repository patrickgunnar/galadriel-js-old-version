import fs from "fs";
import path from "path";

const shouldExclude = (__name: string, __toExclude: Array<string>) => {
    const __currentName = `${__name}`.toLocaleLowerCase();

    return __toExclude.some((__exclude) => {
        const __currentExclude = `${__exclude}`.toLocaleLowerCase();

        return (
            __currentName.includes(__currentExclude) ||
            __currentName.includes(".config") ||
            __currentName.includes("config")
        );
    });
};

const fileSystemWalker = (
    __dir: string,
    __fileTypes: Array<string>,
    __toExclude: string[]
): Array<string> => {
    const __files: Array<string> = [];
    const __dirents = fs.readdirSync(__dir, { withFileTypes: true });

    for (const __dirent of __dirents) {
        try {
            const __direntName = __dirent.name;
            const __fullPath = path.join(__dir, __direntName);
            const __isExcluded = shouldExclude(__direntName, __toExclude);
            const __extension = __fileTypes.some((__type) =>
                __fullPath.endsWith(__type)
            );

            if (__dirent.isDirectory() && !__isExcluded) {
                __files.push(
                    ...fileSystemWalker(__fullPath, __fileTypes, __toExclude)
                );
            } else if (__dirent.isFile() && __extension && !__isExcluded) {
                __files.push(__fullPath);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return __files;
};

export { fileSystemWalker };
