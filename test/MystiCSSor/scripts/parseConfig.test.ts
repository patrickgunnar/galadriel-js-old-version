import { parseConfig } from "../../../plugins/MystiCSSor/scripts/parseConfig";

/*
jest.mock("path", () => ({
    ...jest.requireActual("path"),
    resolve: jest.fn(() => "nonexistent.config.js"), // Mocked resolve function
}));
*/

describe("Verify if parseConfig function is parsing the galadriel.config .js or .ts", () => {
    test("Check if configContent exists", () => {
        const configContent = parseConfig();

        expect(configContent).toBeDefined();
    });

    test("Check if configContent is an object", () => {
        const configContent = parseConfig();

        expect(typeof configContent).toBe("object");
    });

    /*
    test("Check error handling when configuration file doesn't exist", () => {
        // Simulate an error when file doesn't exist
        jest.spyOn(console, "error").mockImplementation(() => {});

        const configContent = parseConfig();

        expect(console.error).toHaveBeenCalled();
        expect(configContent).toEqual([]);
    });
    */
});
