const initialState = {
  coins: [],
  currencies: [],
  // nimaiis: [],
  deleteStatus: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COINS":
      return {
        ...state,
        coins: action.coins,
      };
    case "SET_CURRS":
      return {
        ...state,
        currencies: action.currencies,
      };
    // case "SET_NIMAIIS":
    //   return {
    //     ...state,
    //     nimaiis: action.nimaiis,
    //   };
    case "DELETE_STATUS":
      return {
        ...state,
        deleteStatus: !state.deleteStatus,
      };
    default:
      return state;
  }
};

export default Reducer;
