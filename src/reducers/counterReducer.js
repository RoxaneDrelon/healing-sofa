const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD1":
      return { count: state.count + 1 };
    case "REMOVE1":
      return { count: state.count - 1 };
    case "ADD10":
      return { count: state.count + 10 };
    case "REMOVE10":
      return { count: state.count - 10 };
    case "ADD30":
      return { count: state.count + 30 };
    case "RESET":
      return (state.count = 0);
    default:
      return state;
  }
};

export default counterReducer;
