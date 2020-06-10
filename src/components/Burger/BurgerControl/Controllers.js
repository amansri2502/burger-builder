import React from "react";
import classes from "./Controllers.module.css";
const Controllers = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More}>ADD</button>
      <button className={classes.Less}>REMOVE</button>
    </div>
  );
};

export default Controllers;
