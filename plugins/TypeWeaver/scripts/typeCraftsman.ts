import { GaladrielParamsType } from "../../../types/coreTypes";

const typeCraftsman = (params: GaladrielParamsType): string => {
    const typeDefinition: string[] = [];
    const interfacesDefinition: string[] = [
        "export interface CreateClassesType {",
    ];

    for (const key in params) {
        try {
            const def: string[] = [];
            const options = params[key]
                .map((opt) => (opt === "string" ? `${opt}` : `'${opt}'`))
                .join(" | ");

            def.push(
                `/**\n * Options to ${key}:\n * ${params[key].join(
                    ", "
                )}\n */\n`
            );

            def.push(`type ${key} = ${options};\n\n`);
            interfacesDefinition.push(`${key}?: ${key}; `);
            typeDefinition.push(def.join(""));
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    interfacesDefinition.push("}");
    typeDefinition.push(interfacesDefinition.join(" "));

    return typeDefinition.join(" ");
};

export { typeCraftsman };
