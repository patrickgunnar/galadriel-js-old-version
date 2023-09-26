import { ModuleKind, ScriptTarget, transpileModule } from "typescript";

const transpileTypeScriptCode = (tsString: string): string => {
    try {
        const result = transpileModule(tsString, {
            compilerOptions: {
                target: ScriptTarget.ESNext,
                module: ModuleKind.CommonJS,
            },
        });

        return result.outputText;
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return "";
};

export { transpileTypeScriptCode };
