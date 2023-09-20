import { writeFileSync } from "fs";
import { genStaticClasses } from "./genStaticClasses";


const staticStyles = genStaticClasses();
const objectsMerges = `${staticStyles} `;

const genStaticCSS = () => {
    try {
        writeFileSync("./dist/galadriel.css", objectsMerges, "utf-8");
        console.log("galadriel.css generated successfully!");
    } catch (error: any) {
        console.log(`Failed to generate galadriel.css: ${error.message}`);
    }
};

genStaticCSS();
