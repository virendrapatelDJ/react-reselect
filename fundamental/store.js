const { createStore } = require('redux');


const student = {
    personal: {
      name: {
        firstName: 'Virendra',
        lastName: 'patel',
        middleName: 'kumar',
      },
    },
    address: {
      city: 'jabalpur',
      state: 'MP',
      town: 'barela',
      houseNumber: 84,
    },
    contact: {
      email: 'patelvirendra62@gmail.com',
      phone: '9144460897',
    },
  };
  
  const initialState = { student };
  
  function reducer(state = initialState, { payload, type }) {
    if (type === 'FIRST_NAME_CHANGE') {
      const local = { ...state };
      local.student.personal.name.firstName = payload;
      return local;
    }
    if (type === 'CONTACT_CHANGE') {
      const local = { ...state };
      local.student.contact.phone = payload;
      return local;
    }
    if (type === 'CITY_CHANGE') {
      const local = { ...state };
      local.student.address.city = payload;
      return local;
    }
    return state;
  }
  
  const store = createStore(reducer);

  const getState = ()=>store.getState()
  const dispatch = (action)=>store.dispatch(action)

  module.exports = {getState , dispatch}