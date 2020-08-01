import { ADD_COINS } from './constants.js';

//This action takes care of getting coins when the user clicks on the work button.
export const earnCoins = (coin) => ({
    type: ADD_COINS,
    payload: coin
});