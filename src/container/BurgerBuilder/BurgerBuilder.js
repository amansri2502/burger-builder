import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from '../../components/Burger/BurgerControl/BurgerControl';

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      cheese: 0,
      salad: 0,
      bacon:0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredient} />
        <BurgerControl/>
      </Aux>
    );
  }
}
export default BurgerBuilder;
