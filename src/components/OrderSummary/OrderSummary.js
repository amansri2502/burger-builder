import React from "react";
import Aux from "../../hoc/Auxilary";
import Button from "../../UI/Buttons/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "Capitalize" }}>{igkey}</span>:
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Orders</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>continue to checkout</p>
      <p><strong>PRICE : {props.price.toFixed(2)}</strong></p>
      <Button clicked={props.cancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.order} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};
export default orderSummary;
