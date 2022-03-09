const initialState = {
  recipes: [],
  recipeDetail: [],
  recipesStorage: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: payload,
        recipesStorage: payload,
      };
    case "GET_RECIPES_DETAIL":
      return {
        ...state,
        recipeDetail: payload,
      };
    case "FILTER_DIETS":
      const recipesStorage = state.recipesStorage;
      const filteredDiets =
        payload === "All"
          ? recipesStorage
          : recipesStorage.filter((e) => e.diets.includes(payload));
      return {
        ...state,
        recipes: filteredDiets,
      };
    default:
      return { ...state };
  }
}
export default reducer;
