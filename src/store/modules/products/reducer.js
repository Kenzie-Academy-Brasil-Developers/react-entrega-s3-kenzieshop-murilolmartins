const defaultState = [];

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD":
      return [...action.products];
    default:
      return state;
  }
};

export default productsReducer;
