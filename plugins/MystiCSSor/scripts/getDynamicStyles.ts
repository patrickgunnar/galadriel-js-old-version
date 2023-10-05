import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { hashHex } from "./hashHex";

const getDynamicStyles = (
    key: string, isNested: boolean, value?: any
): { className: string; classValue: string } | null | string => {
    try {
        const property = coreDynamicProperties[key];

        if (isNested && property) {
            return property;
        } else {
            if (property && value && value && typeof value === "string") {
                const hashedHex = hashHex(`${property}:${value}`);
    
                return {
                    className: `galadriel_${hashedHex}`,
                    classValue: `.galadriel_${hashedHex} { ${property}: ${value}; }`,
                };
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
};

export { getDynamicStyles };
