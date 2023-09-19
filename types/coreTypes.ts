export interface ExtractGaladrielClassesType {
    (classes: Record<string, Record<string, any>>): string[];
}

export interface CoreStaticStylesType {
    [key: string]: (options: {
        extractGaladrielClasses: ExtractGaladrielClassesType;
    }) => string[];
}

export interface ClassesObjectType {
    [key: string]: any;
}

export interface GaladrielParamsType {
    [key: string]: string[];
}
