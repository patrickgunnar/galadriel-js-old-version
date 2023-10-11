import { Node } from "@babel/types";
declare const composeCSSClassName: (pseudo: string, nestedClasses: string[], node: Node) => "" | {
    isMedia: boolean;
    classValue: string;
};
export { composeCSSClassName };
