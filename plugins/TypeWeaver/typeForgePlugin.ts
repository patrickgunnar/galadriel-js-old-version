import fs from "fs";
import path from "path";
import { dynamicObjectManager } from "./scripts/dynamicObjectManager";
import { typeCraftsman } from "./scripts/typeCraftsman";

const typeForgePlugin = () => {
    const __objectsData = dynamicObjectManager();
    const __typesString = typeCraftsman(__objectsData);

    try {
        fs.writeFileSync(
            path.join(__dirname, "dist", "typeManifest.ts"),
            __typesString
        );
    } catch (error: any) {
        console.error("An error occurred:", error);
    }
};

export { typeForgePlugin };
