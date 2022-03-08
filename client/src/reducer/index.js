const initialState = {
    recipes : [],
    recipeDetail: []
}


function reducer (state= initialState, {type, payload}){
    switch(type){
        case 'GET_RECIPES':
            return{
                ...state,
                recipes : payload
            }
        case 'GET_RECIPES_DETAIL':
            return{
                ...state,
                recipeDetail : payload
            }
        default: return {...state}
    }
};
export default reducer;