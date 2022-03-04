const initialState = {
    recipes : []
}


function reducer (state= initialState, actions){
    switch(actions.type){
        case 'GET_RECIPES':
            return{
                ...state,
                recipes : actions.payload
            }
        default: return {...state}
    }
};
export default reducer;