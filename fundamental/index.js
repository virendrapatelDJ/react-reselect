
const { fullNameSelector } = require('./selectors');
const {getState , dispatch}  = require('./store')


dispatch({
  payload: 'Chandramohan',
  type: 'FIRST_NAME_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: 'Bhopal',
  type: 'CITY_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: '8998983849',
  type: 'PHONE_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: 'Virendra',
  type: 'FIRST_NAME_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: 'Mumbai',
  type: 'CITY_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: '8r448983849',
  type: 'PHONE_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: 'Sandeep',
  type: 'FIRST_NAME_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: 'Indore',
  type: 'CITY_CHANGE',
});

console.log(fullNameSelector(getState()));

dispatch({
  payload: '433545',
  type: 'PHONE_CHANGE',
});

console.log(fullNameSelector(getState()));
