import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControl/BurgerControl";
import Model from "../../UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

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
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }


  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredient[type];
    let newCount = oldCount + 1;
    // As state need to be upgraded in immutable way
    let updatedIngredient = { ...this.state.ingredient };
    updatedIngredient[type] = newCount;
    let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredient: updatedIngredient });
    this.updatePurchaseState(updatedIngredient);
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
      this.updatePurchaseState(updatedIngredient);
    }
  };

  orderButtonclickedHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelOrderClickedHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert(" continued walla walla ");
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredient,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      // Aux is a hoc
      <Aux>
        {/* model Component */}
        <Model
          show={this.state.purchasing}
          clicked={this.cancelOrderClickedHandler}
        >
          <OrderSummary
            cancel={this.cancelOrderClickedHandler}
            order={this.purchaseContinueHandler}
            ingredients={this.state.ingredient}
            price={this.state.totalPrice}
          ></OrderSummary>
        </Model>
        {/* Burger */}
        <Burger ingredients={this.state.ingredient} />
        <BurgerControl
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          clicked={this.orderButtonclickedHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
