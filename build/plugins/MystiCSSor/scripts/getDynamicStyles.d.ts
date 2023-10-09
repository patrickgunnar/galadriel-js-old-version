declare const getDynamicStyles: (key: string, isNested: boolean, value?: any) => {
    className: string;
    classValue: string;
} | null | string;
export { getDynamicStyles };
