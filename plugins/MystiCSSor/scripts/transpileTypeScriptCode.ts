import { ModuleKind, ScriptTarget, transpileModule } from "typescript";

const transpileTypeScriptCode = (__tsString: string): string => {
    try {
        const __result = transpileModule(__tsString, {
            compilerOptions: {
                target: ScriptTarget.ESNext,
                module: ModuleKind.CommonJS,
            },
        });

        return __result.outputText;
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return "";
};

export { transpileTypeScriptCode };
