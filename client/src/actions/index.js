import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios.get("/recipes",{});
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}


export function getRecipesDetail(id) {
  return async function (dispatch) {
    var json = await axios.get(`/recipes/${id}`,{});
    return dispatch({
      type: "GET_RECIPES_DETAIL",
      payload: json.data,
    });
  };
}

export function getDiets() {
  return async function (dispatch) {
    var json = await axios.get(`/types`,{});
    return dispatch({
      type: "GET_DIETS",
      payload: json.data,
    });
  };
}

export function getRecipesByName (name) {
  return async function (dispatch){
    try{
      var json = await axios.get(`/recipes?name=${name}`)
      return dispatch ({
        type : 'SEARCH_RECIPES_BY_NAME',
        payload: json.data
      })
    }catch (error){
      console.log(error)
    }
  }
}

export function filterByDiet(diet){
  return ({
    type: "FILTER_DIETS",
    payload: diet,
  });
}

export function orderByAlphabet(payload){
  return({
    type:'ORDER_BY_ALPHABET',
    payload
  })
}

export function orderByScore(payload){
  return({
    type:'ORDER_BY_SCORE',
    payload
  })
}

export function postRecipe (payload){
  return async function (dispatch){
    const json = await axios.post('/recipe', payload)
    return json
  }
}