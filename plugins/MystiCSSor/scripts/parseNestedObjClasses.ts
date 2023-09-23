const parseNestedObjClasses = (
    __key: string,
    __nestedObjKey: string,
    __nestedObjValue: any
) => {
    // THIS FUNCTION MUST CALL extractClasses PASSING THE nestedKey AND THE nestedValue
    // AND RETURN THE RETURN OF extractClasses
    console.log(__key, " --> ", __nestedObjKey, __nestedObjValue);
};

export { parseNestedObjClasses };
