const { getAllFiles } = require("./getAllFiles");
const { getConfigSettings } = require("./getConfigSettings");
const { parseFile } = require("./parseFile");

const galadrielConfig = getConfigSettings();
const toExclude = galadrielConfig?.exclude || [];
const __dir = ".";
const __types = [".js", ".jsx", ".ts", ".tsx", ".html"];
const files = getAllFiles(__dir, __types, toExclude);

const processObjects = (files) => {
    for (const file of files) {
        const parsedContent = parseFile(file);

        if (parsedContent) {
            console.log(parsedContent);
        }
    }
};

processObjects(files);
//module.exports = { processObjects };
