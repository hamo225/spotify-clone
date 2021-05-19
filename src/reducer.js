export const initialState = {
  user: null,
  plalists: [],
  playing: false,
  item: null,
  token:
    "BQAS831QXXESlH-gpC0lizGrVRb_a8022TBHNAWahlYP0Y40HpQvPbb7vHbcyYvIFtgcU4iXPrsCStE7eAwmOPj9e0L2Yd1SXDUwzayUvTCwo0kIUkpGsP49gI0KH1la5y5U2Mrat6Y5FpAy_hNCsIbitU-9F1i1SEbVk7wPbs2OYbmh",
};

// create reducer - takes 2 things, state and the action.
//STATE IS WHAT IT CURRENTLY LOOKS LIKE - so the initial state above
//action is the action to be taken - set user, set song etc
const reducer = (state, action) => {
  console.log(action);

  //AN ACTION HAS TWO THINGS - type and payload(can be called whatever)
  // we dispatch actuion types that do something - like adding a user to the data later

  switch (action.type) {
    case "SET_USER": //when the reducer receives an action called set user - spread the state and change the current user value to the new one
      return {
        ...state, //keep current state
        user: action.user, //change only the user value
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state; //always default the the current app state
  }
};

export default reducer;
