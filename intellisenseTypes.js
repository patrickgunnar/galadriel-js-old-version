const { dynamicStylesObject } = require("./tools/utils/dynamicStylesObject");
const { genGaladrielTypes } = require("./tools/utils/genGaladrielTypes");

const path = require("path");
const fs = require("fs");

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
