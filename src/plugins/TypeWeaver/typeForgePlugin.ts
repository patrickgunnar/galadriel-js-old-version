import * as fs from "fs";
import * as path from "path";
import { dynamicObjectManager } from "./scripts/dynamicObjectManager";

const typeForgePlugin = () => {
    const objectsData = dynamicObjectManager();

    if(objectsData) {
        const { types, config } = objectsData;

        if(types) {
            try {
                fs.writeFileSync(
                    path.join(__dirname, "..", "..", "..", "types", "typeManifest.ts"),
                    `export type CraftClassesType = { ${types} }`
                );
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        }

        if(config) {
            try {
                fs.writeFileSync(
                    path.join(__dirname, "..", "..", "..", "types", "config.ts"),
                    `export type Config = { ${config} }`
                );
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        }
    }
};

typeForgePlugin();
