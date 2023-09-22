export interface ExtractGaladrielClassesType {
    (classes: Record<string, Record<string, any>>): string[];
}

export interface CoreStaticStylesType {
    [key: string]: (options: {
        extractGaladrielClasses: ExtractGaladrielClassesType;
    }) => any;
}

export interface ClassesObjectType {
    [key: string]: any;
}

export interface GaladrielParamsType {
    [key: string]: string[];
}

export interface ExtractGaladrielCSSClassesType {
    (classes: Record<string, Record<string, any>>): any;
}

export interface ButtonColorProps {
    bgColor: string;
    borderColor: string;
    bsColorOne: string;
    bsColorTwo: string;
    filterColor: string;
}
