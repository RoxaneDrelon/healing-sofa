const drugQuantityReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUANTITY_1":
      return {
        ...state,
        quantity1: action.quantity,
      };
    case "ADD_QUANTITY_2":
      return {
        ...state,
        quantity2: action.quantity,
      };
    case "ADD_QUANTITY_3":
      return {
        ...state,
        quantity3: action.quantity,
      };
    default:
      return state;
  }
};

export default drugQuantityReducer;
