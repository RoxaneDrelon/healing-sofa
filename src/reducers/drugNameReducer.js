const drugNameReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DRUG_NAME":
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};

export default drugNameReducer;
