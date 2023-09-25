import { dynamicObjectManager } from "../../plugins/TypeWeaver/scripts/dynamicObjectManager";
import { testObjs } from "./src/testObjs";

describe("Testing the dynamicObjectManager function", () => {
    test("Should return an object with the available classes", () => {
        const objs = dynamicObjectManager();

        expect(JSON.stringify(objs)).toContain(JSON.stringify(testObjs));
    });
});
