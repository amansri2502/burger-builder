import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControl/BurgerControl";

const INGREDIENT_PRICES = {
  cheese: 0.5,
  salad: 0.4,
  bacon: 0.7,
  meat: 0.8,
};
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredient[type];
    let newCount = oldCount + 1;
    // As state need to be upgraded in immutable way
    let updatedIngredient = { ...this.state.ingredient };
    updatedIngredient[type] = newCount;
    let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredient: updatedIngredient });
  };
  removeIngredientHandler = (type) => {
    let oldCount = this.state.ingredient[type];
    
    if (oldCount > 0) {
       let newCount = oldCount - 1;
      // As state need to be upgraded in immutable way
    let updatedIngredient = { ...this.state.ingredient };
    updatedIngredient[type] = newCount;
    let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredient: updatedIngredient });
    }
    
  };

  render() {
    return (
      // Aux is a hoc
      <Aux>
        <Burger ingredients={this.state.ingredient} />
        <BurgerControl ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}/>
      </Aux>
    );
  }
}
export default BurgerBuilder;
