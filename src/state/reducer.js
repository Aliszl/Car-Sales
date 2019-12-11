//A reducer is a function that returns an object
//The returned object represents the state tree
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import * as types from "./actionTypes";
import features from "../constants/features";

const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    default:
      return count;
  }
}

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};
export function carReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return state.features.concat(action.payload);

    default:
      return state;
  }
}
