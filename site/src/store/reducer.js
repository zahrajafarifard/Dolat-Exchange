const initialState = {
  todayVisitors: 0,
  yesterdayVisitors: 0,
  totalVisitors: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODAY_VISITORS":
      return {
        ...state,
        todayVisitors: action.todayVisitors,
      };
    case "YESTERDAY_VISITORS":
      return {
        ...state,
        yesterdayVisitors: action.yesterdayVisitors,
      };
    case "TOTAL_VISITORS":
      return {
        ...state,
        totalVisitors: action.totalVisitors,
      };
    default:
      return state;
  }
};

export default Reducer;
