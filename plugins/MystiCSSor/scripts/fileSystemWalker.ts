import fs from "fs";
import path from "path";

interface FileSystemWalkerReturnType {
    flattenedFiles: string[];
}

const shouldExclude = (name: string, toExclude: Array<string>) => {
    const currentName = `${name}`.toLocaleLowerCase();

    return toExclude.some((exclude) => {
        const currentExclude = `${exclude}`.toLocaleLowerCase();

        return (
            currentName.includes(currentExclude) ||
            currentName.includes(".config") ||
            currentName.includes("config")
        );
    });
};

const fileSystemWalker = async (
    dir: string,
    fileTypes: Array<string>,
    toExclude: string[]
): Promise<FileSystemWalkerReturnType> => {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const filesPromises = await Promise.all(
        dirents.map(async (dirent) => {
            const direntName = dirent.name;
            const fullPath = path.join(dir, direntName);
            const isExcluded = shouldExclude(direntName, toExclude);
            const extension = fileTypes.some((type) =>
                fullPath.endsWith(type)
            );

            if (dirent.isDirectory() && !isExcluded) {
                return fileSystemWalker(fullPath, fileTypes, toExclude);
            } else if (dirent.isFile() && extension && !isExcluded) {
                return fullPath;
            }
        })
    );

    const filesArray = await Promise.all(filesPromises);
    const flattenedFiles = filesArray
        .flat()
        .filter((file) => typeof file === "string") as string[];

    return {
        flattenedFiles,
    };
};

export { fileSystemWalker };
