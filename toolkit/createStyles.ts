import { CreateClassesType } from "../types/galadrielIntelliSense";
import { genClassNames } from "./utils/genClassNames";

interface CallbackType {
    (): CreateClassesType;
}

interface CreateStylesType {
    (callback: CallbackType): string;
}

const createStyles: CreateStylesType = (callback): string => {
    const classesObject = callback();

    if (!classesObject) return "";

    return genClassNames(classesObject);
};

export { createStyles };
