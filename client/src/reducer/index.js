const initialState = {
  recipes: [],
  recipeDetail: [],
  recipesStorage: [],
  diets: [],
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
      console.log(payload)
      return {
        ...state,
        recipeDetail: payload,
      };
    case "SEARCH_RECIPES_BY_NAME":
      return {
        ...state,
        recipes: payload,
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
    case "ORDER_BY_ALPHABET":
      let alphabetArr =
        payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              } else {
                return 0;
              }
            })
          : state.recipes.sort(function (a, b) {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        recipes: alphabetArr,
      };
    case "ORDER_BY_SCORE":
      let scoreArr =
        payload === "high"
          ? state.recipes.sort(function (a, b) {
              if (a.dishScore < b.dishScore) {
                return 1;
              }
              if (a.dishScore > b.dishScore) {
                return -1;
              } else {
                return 0;
              }
            })
          : state.recipes.sort(function (a, b) {
              if (a.dishScore > b.dishScore) {
                return 1;
              }
              if (a.dishScore < b.dishScore) {
                return -1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        recipes: scoreArr,
      };
    case "GET_DIETS":
      return {
        ...state,
        diets: payload,
      };
      case 'POST_RECIPE':
        return{
          ...state,
        }
    default:
      return { ...state };
  }
}
export default reducer;
