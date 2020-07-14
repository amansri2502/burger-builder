import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addIngredient=(name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}
export const removeIngredient=(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}
export const setIngredients=(ingredients)=>{
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredient:ingredients
    }
}
export const failedToLoadingredients=(error)=>{
    return {
        type:actionTypes.FAILED_LOADING_INGREDIENTS,
    
    }
}
// due to imported thunk package this function gets dispose method from burgerBuilder
export const initIngredients=()=>{
    return dispatch=>{
        axios
        .get("ingredient.json")
        .then((response) => {
          dispatch(setIngredients(response.data))
        })
        .catch((error) => {
          dispatch(failedToLoadingredients())
        });
    }
}