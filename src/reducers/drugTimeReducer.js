const drugTimeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TIME_OF_THE_DAY":
      return {
        ...state,
        time: action.time,
      };
    case "ADD_START_DAY":
      return {
        ...state,
        dateStart: action.date,
      };
    case "ADD_END_DAY":
      return {
        ...state,
        dateEnd: action.date,
      };
    default:
      return state;
  }
};

export default drugTimeReducer;
