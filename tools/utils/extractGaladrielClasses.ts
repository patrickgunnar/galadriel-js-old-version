import { ExtractGaladrielClassesType } from "../../types/coreTypes";

export const extractGaladrielClasses: ExtractGaladrielClassesType = (
    classes
) => {
    return Object.keys(classes).map((key) => key.replace(".", ""));
};
