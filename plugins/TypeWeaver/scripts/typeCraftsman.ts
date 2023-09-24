import { GaladrielParamsType } from "../../../types/coreTypes";

const typeCraftsman = (__params: GaladrielParamsType): string => {
    const __typeDefinition: string[] = [];
    const __interfacesDefinition: string[] = [
        "export interface CreateClassesType {",
    ];

    for (const __key in __params) {
        try {
            const __def: string[] = [];
            const __options = __params[__key]
                .map((__opt) => `'${__opt}'`)
                .join(" | ");

            __def.push(
                `/**\n * Options to ${__key}:\n * ${__params[__key].join(
                    ", "
                )}\n */\n`
            );

            __def.push(`type ${__key} = ${__options};\n\n`);
            __interfacesDefinition.push(`${__key}?: ${__key}; `);
            __typeDefinition.push(__def.join(""));
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    __interfacesDefinition.push("}");
    __typeDefinition.push(__interfacesDefinition.join(" "));

    return __typeDefinition.join(" ");
};

export { typeCraftsman };
