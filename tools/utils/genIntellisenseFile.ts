import { writeFileSync } from "fs";
import { dynamicStylesObject } from "./dynamicStylesObject";
import { genGaladrielTypes } from "./genGaladrielTypes";


const staticStyles = dynamicStylesObject();
const objectsMerges = { ...staticStyles };
const intelliSenseStr = genGaladrielTypes(objectsMerges);

const genIntellisenseFile = () => {
    try {
        writeFileSync("./types/galadrielIntelliSense.ts", intelliSenseStr, "utf-8");
        console.log("galadrielIntelliSense.d.ts generated successfully!");
    } catch (error: any) {
        console.log(
            `Failed to generate galadrielIntelliSense.d.ts: ${error.message}`
        );
    }
};

genIntellisenseFile();
