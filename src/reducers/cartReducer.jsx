const cartReducer = (state, action) => {
  switch (action.type) {
    //   case "SAME-CASE-NAME":
    //     return {
    //       ...state, //Shallow copy of state
    //       cart: [...state.cart, action.payload], // "state" is an "object" & "action.payload" is the data "previous state"
    //     };

    
    case "ADD_TO_CART":
      return {
        ...state, //Shallow copy of state [object1,object2,object3...]          
        cart: [...state.cart, action.payload], // "state" is an "object" & "action.payload" is the data "previous state"
      };
    default:
      return state; // Needed for Switch
  }
};

export default cartReducer;
