import { genClassNames } from "../toolkit/utils/genClassNames";
import { CreateClassesType } from "../types/galadrielIntelliSense";

interface CallbackType {
    (): CreateClassesType;
}

interface CreateStylesType {
    (callback: CallbackType): string;
}

const createStyles: CreateStylesType = (callback): string => {
    const classesObject = callback();

    if (!classesObject) return "";

    return genClassNames(classesObject)
};

export { createStyles };
