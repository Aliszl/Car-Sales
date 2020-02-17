import * as types from "./actionTypes";
// STEP 7 OF THE GENERAL STEPS

// React components shouldn't worry about
// things like actions or action types!
// So we create these helpers
// for the components to consume.

// The arguments will be supplied
// by the React component

// The Counter component will
// be interested in this function!
export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}
export function addFeature(id) {
  console.log(id);
  return {
    type: types.ADD_FEATURE,
    payload: id
    //filter over features array here
  };
}
export function deleteFeature(id) {
  return {
    type: types.REMOVE_FEATURE,
    payload: id
    //filter over features array here
  };
}
export function additionalPriceReducer(id) {
    return {
      type: types.ADD_PRICE,
      //filter over features array here
    };
  }



//   const postReducer = (state = [], action) => {
//     switch(action.type) {
//       case 'ADD_POST':
//         return state.concat([action.data]);
//       case 'DELETE_POST':
//         return state.filter((post)=>post.id !== action.id);
//       default:
//         return state;
//     }
//   }
//   export default postReducer;
