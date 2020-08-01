import { CHANGE_SEARCH_FIELD } from './constants.js';

//Initial object that we'll have in the redux store (state)
const initialState = {
    searchField: ''
}

//It gets the input of state and an action. When an action happens, it's gonna act upon the state
//This reducer takes care of changing the state when the user types in the SearchBox 
export const searchProduct = (state = initialState, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }

}