import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControl/BurgerControl";
import Model from "../../UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "axios";
import Spinner from "../../UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

const INGREDIENT_PRICES = {
  cheese: 0.5,
  salad: 0.4,
  bacon: 0.7,
  meat: 0.8,
};
class BurgerBuilder extends Component {
  state = {
    ingredient: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error:false
  };

  componentDidMount() {
    axios
      .get("https://burger.firebaseio.com/ingredient")
      .then((response) => {
        this.setState({ ingredient: response.data });
      }).catch(error=>{this.setState({error:error})});
  }

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
    this.setState({ loading: true });
    const order = {
      ingredient: this.state.ingredient,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: "Aman",
        address: {
          steet: "reva",
          Pincode: "560064",
          country: "india",
        },
        email: "aman.sri@gmail.com",
        delivarymethod: "fastest",
      },
    };
    //Post request
    axios
      .post("/orders", order)
      .then((response) => this.setState({ loading: false, purchasing: false }))
      .catch((err) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredient,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    // to render spinner till ingredient is loading
    let burger = this.state.error?<p>Error in loading page </p>:<Spinner />;
    if (this.state.ingredient) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredient} />
          <BurgerControl
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            clicked={this.orderButtonclickedHandler}
          ></BurgerControl>
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          cancel={this.cancelOrderClickedHandler}
          order={this.purchaseContinueHandler}
          ingredients={this.state.ingredient}
          price={this.state.totalPrice}
        ></OrderSummary>
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      // Aux is a hoc
      <Aux>
        {/* model Component */}
        <Model
          show={this.state.purchasing}
          clicked={this.cancelOrderClickedHandler}
        >
          {orderSummary}
        </Model>
        {burger}
      </Aux>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);
