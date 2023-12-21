export const reCurrentCatalog = (
  state = JSON.parse(localStorage.getItem("current_catalog")) || "All",
  action
) => {
  switch (action.type) {
    case "CATALOG":
      return action.payload;
    default:
      return state;
  }
};

export const acCurrentCatalog = (catalog) => {
  return {
    type: "CATALOG",
    payload: catalog,
  };
};
