import * as actionType from "./actions";

const initialState = {
  ingredient: {
    cheese: 0,
    salad: 0,
    bacon: 0,
    meat: 0,
  },
  totalPrice: 0,
};
const INGREDIENT_PRICES = {
    cheese: 0.5,
    salad: 0.4,
    bacon: 0.7,
    meat: 0.8,
  };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        //first we distribute what all was there in state but even after that we get reference for object of type ingredient to we use spread again
        ...state,
        ingredient: {
          ...state.ingredient,
          // this is a new syntex in ES6 which help to form keys dynamically
          [action.ingredientName]: state.ingredient[action.ingredientName] + 1,
        },
        totalPrice:state.totalPrice+INGREDIENT_PRICES[action.ingredientName]
      };
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] - 1,
        },
        totalPrice:state.totalPrice-INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
};
export default reducer;
