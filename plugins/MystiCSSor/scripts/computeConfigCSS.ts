import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { parseConfig } from "./parseConfig";

const computeConfigCSS = (clsName: string, isNested: boolean = false) => {
    const { craftStyles = {} } = parseConfig();
    const customStyles: string[] = [];

    for (const [configKey, configValue] of Object.entries(craftStyles)) {
        const property = coreDynamicProperties[configKey];

        if (property) {
            for (const [key, value] of Object.entries(
                configValue as Record<string, string>
            )) {
                if (clsName === key || clsName === key.split(":")[0]) {
                    if (isNested) {
                        return { customKey: property, customValue: value};
                    } else {
                        let stylesClass: string;

                        if (key.includes(":")) {
                            stylesClass = `.${key} { ${property}: ${value}; }`;
                        } else {
                            stylesClass = `.${key}& { ${property}: ${value}; }`;
                        }

                        customStyles.push(stylesClass);
                    }
                }
            }
        }
    }

    return customStyles.join(" ");
};

export { computeConfigCSS };
