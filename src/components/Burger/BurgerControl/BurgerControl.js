import React from "react";
import classes from "./BurgerControl.module.css";
import Controllers from "./Controllers";

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
        return <Controllers key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};
export default BurgerControl;
