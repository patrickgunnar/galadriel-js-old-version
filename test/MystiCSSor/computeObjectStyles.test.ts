import { computeObjectStyles } from "../../plugins/MystiCSSor/scripts/computeObjectStyles";

const staticStyles =
    ".element-button-dark-gold { background: #B8860B; border: 1px solid #708090; border-radius: 10px; box-shadow: inset -12px 12px 23px #a0750a, inset 12px -12px 23px #d0970c; display: inline-block; font-size: 16px; font-weight: bold; text-align: center; text-decoration: none; padding: 15px 30px; height: auto; width: auto; cursor: pointer; color: #000000; transition: transform 0.3s; position: relative; z-index: 1; filter: drop-shadow(6px 4px 4px rgba(112, 128, 144, 0.7));  } .element-button-dark-gold:hover { transform: scale(1.05); opacity: 0.8; } .panel-flex { display: flex; }  .flex-orientation-row { flex-direction: row; }  .adjust-center { align-items: center; }  .organize-center { justify-content: center; }  .proportion-landscape { aspect-ratio: 16/9; }  .controller-pointer { cursor: pointer; }  .excess-hidden { overflow: hidden; }";

describe("Testing the computeObjectStyles function", () => {
    test("Should expect a string containing css classes", () => {
        const { __staticStyles, __dynamicStyles, __configStyles } =
            computeObjectStyles();

        expect(__staticStyles.replace(" ", "")).toContain(staticStyles.replace(" ", ""));
    });
});
