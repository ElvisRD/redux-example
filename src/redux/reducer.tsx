const initialState = {
  amount: 0,
};

const state = (state = initialState, action: any) => {
  switch (action.type) {
    case "aumentar": {
      return {
        ...state,
        amount: state.amount + 1,
      };
    }
    case "disminuir": {
      return {
        ...state,
        amount: state.amount - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default state;
