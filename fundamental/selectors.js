const { createSelector } = require("reselect");

const firstNameSelector = createSelector(
    (state) => state.student.personal.name.firstName,
    (firstName) => {
      console.log('-----extracting firstName------');
      return firstName;
    }
  );
  const lastNameSelector = createSelector(
    (state) => state.student.personal.name.lastName,
    (lastName) => {
      console.log('-----extracting lastName-----');
      return lastName;
    }
  );
  const middleNameSelector = createSelector(
    (state) => state.student.personal.name.middleName,
    (middleName) => {
      console.log('------extracting middleName-----');
      return middleName;
    }
  );
  
  const fullNameSelector = createSelector(
    firstNameSelector,
    lastNameSelector,
    middleNameSelector,
    (firstName, lastName, middleName) => {
      console.log('------Creating FullName-----');
      return `${firstName} ${middleName} ${lastName}`;
    }
  );



  const totalMarksSelector = createSelector(
    (state)=>state.student.marks,
    (marks) => {
      console.log(' ------CALCULATION TOTAL MARKS-----');
      return marks.reduce((acc , item)=>acc + item.marks , 0 )
    }
  );



  module.exports = {
    fullNameSelector, totalMarksSelector
  }