import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { parseConfig } from "./parseConfig";

const computeConfigOnNested = (clsName: string) => {
    const { craftStyles = {} } = parseConfig();

    for (const [configKey, configValue] of Object.entries(craftStyles)) {
        const property = coreDynamicProperties[configKey];

        if (property) {
            for (const [key, value] of Object.entries(
                configValue as Record<string, string>
            )) {
                if (clsName === key) {
                    return { customKey: property, customValue: value};
                }
            }
        }
    }

    return null;
};

export { computeConfigOnNested };
