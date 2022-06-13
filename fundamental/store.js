const { createStore } = require('redux');

const student = {
  marks: [
    { subject: 'Maths', marks: 78 },
    { subject: 'English', marks: 34 },
    { subject: 'Javascript', marks: 66 },
    { subject: 'Science', marks: 54 },
    { subject: 'Java', marks: 90 },
  ],
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
    phone: '67678788787',
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
  if (type === 'UPDATE_MARKS') {
    const local = { ...state };
    const random = () => Math.floor(Math.random() * 100);
    local.student.marks = [
      { subject: 'Maths', marks: random() },
      { subject: 'English', marks: random() },
      { subject: 'Javascript', marks: random() },
      { subject: 'Science', marks: random() },
      { subject: 'Java', marks: random() },
    ];
    return local;
  }
  return state;
}

const store = createStore(reducer);

const getState = () => store.getState();
const dispatch = (action) => store.dispatch(action);

module.exports = { getState, dispatch };
