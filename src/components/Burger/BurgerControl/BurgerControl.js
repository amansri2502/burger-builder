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
      {Controls.map((ctrl) => {
        return (
          <Controllers
            key={ctrl.label}
            label={ctrl.label}
            add={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemoved(ctrl.type)}
          />
        );
      })}
    </div>
  );
};
export default BurgerControl;
