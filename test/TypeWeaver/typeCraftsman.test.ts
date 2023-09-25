import { typeCraftsman } from "../../plugins/TypeWeaver/scripts/typeCraftsman";
import { testObjs } from "./src/testObjs";

describe("Testing the dynamicObjectManager function", () => {
    test("Should return an object with the available classes", () => {
        const types = typeCraftsman(testObjs);

        expect(types).toBeDefined();
    });
});
