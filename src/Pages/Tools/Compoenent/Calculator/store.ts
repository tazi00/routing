export const initalState = {
  currentOperand: null,
  previousOperad: null,
  operator: null,
};

export function reducer(state = initalState, { type, payload }) {
  switch (type) {
    case "addDigit": {
      if (state.currentOperand === "0" && payload === "0") return state;
      if (state.currentOperand?.includes(".") && payload === ".") return state;
      return {
        ...state,
        currentOperand: (state.currentOperand || "") + payload,
      };
    }
    case "addOperator": {
      return state;
    }
    case "clear": {
      return state;
    }
    case "reset": {
      return {
        ...state,
        currentOperand: null,
        previousOperad: null,
        operator: null,
      };
    }

    default:
      return state;
  }
}
