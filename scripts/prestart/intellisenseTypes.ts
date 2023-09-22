import { dynamicStylesObject } from "../dynamicStylesObject";
import { genGaladrielTypes } from "../genGaladrielTypes";

const fs = require("fs");
const path = require("path");

try {
    const staticStyles = dynamicStylesObject();
    const objectsMerges = { ...staticStyles };
    const intelliSenseStr = genGaladrielTypes(objectsMerges);

    fs.writeFileSync(
        path.join("types", "galadrielIntelliSense.ts"),
        intelliSenseStr
    );

    console.log("Successfully generated the galadrielIntelliSense.ts!");
} catch (error) {
    console.error("An error occurred:", error);
}
