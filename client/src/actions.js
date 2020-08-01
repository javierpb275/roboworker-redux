import { ADD_COINS } from './constants.js';

//This action takes care of searching for the product that the user types in the SearchBox component.
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

//This action takes care of getting coins when the user clicks on the work button.
export const earnCoins = (coin) => ({
    type: ADD_COINS,
    payload: coin
});