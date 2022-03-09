import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/recipes",{});
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}


export function getRecipesDetail(id) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/recipes/${id})`,{});
    return dispatch({
      type: "GET_RECIPES_DETAIL",
      payload: json.data,
    });
  };
}

export function filterByDiet(diet){
  console.log(diet)
  return ({
    type: "FILTER_DIETS",
    payload: diet,
  });
}