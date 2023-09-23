import { CreateClassesType } from "../types/galadrielIntelliSense";

interface CallbackType {
    (): CreateClassesType;
}

interface CreateStylesType {
    (callback: CallbackType): string;
}

const createStyles: CreateStylesType = (callback): string => {
    return Object.values(callback() ?? {}).join(" ") || "";
};

export { createStyles };
