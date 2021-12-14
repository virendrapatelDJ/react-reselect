const { fullNameSelector, totalMarksSelector } = require('./selectors');
const { getState, dispatch } = require('./store');

const lineBreak = ()=>console.log()

const changePhone = (payload, type = 'PHONE_CHANGE') =>
  dispatch({ payload, type });
const changeFirstName = (payload, type = 'FIRST_NAME_CHANGE') =>
  dispatch({ payload, type });
const changeCity = (payload, type = 'CITY_CHANGE') =>
  dispatch({ payload, type });
const changeMarks = (type = 'UPDATE_MARKS') =>
  dispatch({ type });


console.log(totalMarksSelector(getState()));
console.log(totalMarksSelector(getState()));

lineBreak()

console.log(fullNameSelector(getState()))
changeCity("Jabalpur")
console.log(fullNameSelector(getState()))
changePhone("9988790899")
console.log(fullNameSelector(getState()))

lineBreak()

changeFirstName("Sachin")
console.log(fullNameSelector(getState()))
changeCity("Pune")
console.log(fullNameSelector(getState()))
changePhone("9988792229")
console.log(fullNameSelector(getState()))

lineBreak()

changeFirstName("Sandeep")
console.log(fullNameSelector(getState()))
changeCity("Bhopal")
console.log(fullNameSelector(getState()))
changePhone("23232323")
console.log(fullNameSelector(getState()))

lineBreak()

console.log(totalMarksSelector(getState()));

lineBreak()

console.log("Updating Marks - it will calculate again")
changeMarks()
console.log(totalMarksSelector(getState()));
console.log(totalMarksSelector(getState()));
console.log(totalMarksSelector(getState()));
console.log(totalMarksSelector(getState()));

console.log("Updating Marks - it will calculate again")
changeMarks()
console.log(totalMarksSelector(getState()));
console.log(totalMarksSelector(getState()));
console.log(totalMarksSelector(getState()));
console.log(totalMarksSelector(getState()));