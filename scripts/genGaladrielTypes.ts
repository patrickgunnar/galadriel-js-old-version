import { GaladrielParamsType } from "../types/coreTypes";

export const genGaladrielTypes = (params: GaladrielParamsType): string => {
    const definitionTypes: string[] = [];
    const definitionInterfaces = ["export interface CreateClassesType {"];

    for (const key in params) {
        const currentDef: string[] = [];
        const currentOptions = params[key]
            .map((option) => `'${option}'`)
            .join(" | ");

        currentDef.push(
            `/**\n * Options to ${key}:\n * ${params[key].join(", ")}\n */\n`
        );
        currentDef.push(`type ${key} = ${currentOptions};\n\n`);
        definitionInterfaces.push(`${key}?: ${key}; `);

        definitionTypes.push(currentDef.join(" "));
    }

    definitionInterfaces.push("}");
    definitionTypes.push(definitionInterfaces.join(" "));

    return definitionTypes.join(" ");
};
