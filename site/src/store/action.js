export const todayVisitors = (count) => {
  return {
    type: "TODAY_VISITORS",
    todayVisitors: count,
  };
};

export const yesterdayVisitors = (count) => {
  return {
    type: "YESTERDAY_VISITORS",
    yesterdayVisitors: count,
  };
};

export const totalVisitors = (count) => {
  return {
    type: "TOTAL_VISITORS",
    totalVisitors: count,
  };
};
