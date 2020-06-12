// holds all the controlls

import React from "react";
import classes from "./BurgerControl.module.css";
import Controllers from "./Controllers";
// Array of controlls with label and type which will be used to impliment click functionality
const Controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
];
const BurgerControl = (props) => {
  return (
    <div className={classes.BurgerControl}>
      <p>
        {/* fixed is used to fix the decimal places to 2 */}
        <strong> Price : {props.price.toFixed(2)}</strong>
      </p>
      {Controls.map((ctrl) => {
        return (
          <Controllers
            key={ctrl.label}
            label={ctrl.label}
            add={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemoved(ctrl.type)}
            toDisable={props.disabled[ctrl.type]}
          />
        );
      })}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.clicked}>ORDER NOW</button>
    </div>
  );
};
export default BurgerControl;
