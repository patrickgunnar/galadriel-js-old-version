const genClassNames = (classes: Record<string, any>): string => {
    const classNames = Object.values(classes).map((cls: string) => {
        if (typeof cls === "string") return cls;
        else if (typeof cls === "object") {
            return Object.values(cls)[0];
        }
    });

    return classNames.join(" ");
};

export { genClassNames };
