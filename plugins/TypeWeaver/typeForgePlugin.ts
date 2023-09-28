import * as fs from "fs";
import * as path from "path";
import { dynamicObjectManager } from "./scripts/dynamicObjectManager";
import { typeCraftsman } from "./scripts/typeCraftsman";

const typeForgePlugin = () => {
    const objectsData = dynamicObjectManager();
    const typesString = typeCraftsman(objectsData);

    try {
        fs.writeFileSync(
            path.join(__dirname, "..", "..", "..", "types", "typeManifest.ts"),
            typesString
        );

        fs.writeFileSync(
            path.join(__dirname, "..", "..", "types", "typeManifest.d.ts"),
            typesString
        );
    } catch (error: any) {
        console.error("An error occurred:", error);
    }
};

typeForgePlugin();
