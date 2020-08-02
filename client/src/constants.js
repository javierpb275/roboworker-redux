//Type CHANGE_SEARCH_FIELD for the setSearchField action:
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

//Because it is a promise, it has 3 states:
export const SPEND_COINS_PENDING = 'SPEND_COINS_PENDING';//Pending: first time we send that request, we are waiting for the promise to return
export const SPEND_COINS_SUCCESS = 'SPEND_COINS_SUCCESS';
export const SPEND_COINS_FAILED = 'SPEND_COINS_FAILED';