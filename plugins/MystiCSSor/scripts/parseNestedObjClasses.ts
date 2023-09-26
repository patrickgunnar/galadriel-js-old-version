const parseNestedObjClasses = (
    key: string,
    nestedObjKey: string,
    nestedObjValue: any
) => {
    // THIS FUNCTION MUST CALL extractClasses PASSING THE nestedKey AND THE nestedValue
    // AND RETURN THE RETURN OF extractClasses
    console.log(key, " --> ", nestedObjKey, nestedObjValue);
};

export { parseNestedObjClasses };
