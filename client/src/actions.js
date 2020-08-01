import { CHANGE_SEARCH_FIELD } from './constants.js';


//This action takes care of searching for the product that the user types in the SearchBox component.
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

