import * as fs from "fs";
import * as path from "path";
import { dynamicObjectManager } from "./scripts/dynamicObjectManager";

const typeForgePlugin = () => {
    const objectsData = dynamicObjectManager();

    try {
        fs.writeFileSync(
            path.join(__dirname, "..", "..", "..", "types", "typeManifest.ts"),
            `export type CraftClassesType = { ${objectsData} }`
        );

        fs.writeFileSync(
            path.join(__dirname, "..", "..", "types", "typeManifest.d.ts"),
            `export type CraftClassesType = { ${objectsData} }`
        );
    } catch (error: any) {
        console.error("An error occurred:", error);
    }
};

typeForgePlugin();
