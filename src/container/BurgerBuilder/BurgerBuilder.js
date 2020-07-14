import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControl/BurgerControl";
import Model from "../../UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from'axios'
import Spinner from "../../UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";
import {connect} from "react-redux"
import  * as burgerBuilderAction from './../../redux-store/burgerBuilderAction';
import * as actions from './../../redux-store/orderAction'


class BurgerBuilder extends Component {
  state = {
    
  
  
    purchasing: false,
    
  };

  componentDidMount(){
    this.props.onInitAction();
  }
  // reduce function iterates to each of the array elements and then returns the sum and the sum value is initiallised by 0 which is it's second argument

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  // addIngredientHandler = (type) => {
  //   let oldCount = this.state.ingredient[type];
  //   let newCount = oldCount + 1;
  //   // As state need to be upgraded in immutable way
  //   let updatedIngredient = { ...this.state.ingredient };
  //   updatedIngredient[type] = newCount;
  //   let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
  //   this.setState({ totalPrice: newPrice, ingredient: updatedIngredient });
  //   this.updatePurchaseState(updatedIngredient);
  // };

  // removeIngredientHandler = (type) => {
  //   let oldCount = this.state.ingredient[type];

  //   if (oldCount > 0) {
  //     let newCount = oldCount - 1;
  //     // As state need to be upgraded in immutable way
  //     let updatedIngredient = { ...this.state.ingredient };
  //     updatedIngredient[type] = newCount;
  //     let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
  //     this.setState({ totalPrice: newPrice, ingredient: updatedIngredient });
  //     this.updatePurchaseState(updatedIngredient);
  //   }
  // };

  orderButtonclickedHandler = () => {
    
    this.setState({ purchasing: true });
  };
  cancelOrderClickedHandler = () => {
    this.setState({ purchasing: false });
  };
// as we are now getting ingredients from d=redux we do not need to pass them using queryparams
  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.state.ingredient) {
    //   // encodes it in the form that they can be passed in the url
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredient[i])
    //   );
    // }
    // queryParams.push("price=" + this.state.totalPrice);

    // const queryString = queryParams.join("&");
    this.props.onInitPurchase()

    this.props.history.push("./checkout");
    // this.props.history.push({
    //   pathname: "./Checkout",
    //   search: "?" + queryString,
    // });
  };

  render() {
    let disabledInfo = {
      ...this.props.ingr,
    };
    for (let key in disabledInfo) {
      // check whether the value in the ingredient is less then or equal to 0 this will assign a boolian value
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    // to render spinner till ingredient is loading
    let burger = this.props.error ? <p>Error in loading page </p> : <Spinner />;
    if (this.props.ingr) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingr} />
          <BurgerControl
            ingredientAdded={this.props.onIngredientAdd}
            ingredientRemoved={this.props.onIngredientRemove}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ingr)}
            clicked={this.orderButtonclickedHandler}
          ></BurgerControl>
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          cancel={this.cancelOrderClickedHandler}
          order={this.purchaseContinueHandler}
          ingredients={this.props.ingr}
          price={this.props.price}
        />
      );
    }
    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }
    return (
      // Aux is a higher order component
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
// this will get a state automatically and then that state will be matched with the props
const mapStateToProps=(state)=>{
  return {
    ingr:state.burgerBuilder.ingredient,
    price:state.burgerBuilder.totalPrice,
    error:state.burgerBuilder.error

  }
}
// here the component create a action of dispatch the onIngredientAdd acts as a method that need to be called to add ingredient the type in the dispatch determines the type of action 
const mapStateToDispatch=(dispatch)=>{
  return{
    // now it uses action creaters
    onIngredientAdd:(ingName)=>dispatch(burgerBuilderAction.addIngredient(ingName)),
    onIngredientRemove:(ingName)=>dispatch(burgerBuilderAction.removeIngredient(ingName)),
    onInitAction:()=>dispatch(burgerBuilderAction.initIngredients()),
    onInitPurchase:() => dispatch(actions.purchaseInit()),


  }

}
export default connect(mapStateToProps,mapStateToDispatch)(withErrorHandler(BurgerBuilder,axios));
