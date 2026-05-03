export const setCoinsAction = (val) => {
  return {
    type: "SET_COINS",
    coins: val,
  };
};

export const setCurrenciesAction = (val) => {
  return {
    type: "SET_CURRS",
    currencies: val,
  };
};

// export const setNimaiisAction = (val) => {
//   return {
//     type: "SET_NIMAIIS",
//     nimaiis: val,
//   };
// };

export const deleteStatus = () => {
  return {
    type: "DELETE_STATUS",
  };
};
