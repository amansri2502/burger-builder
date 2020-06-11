import React from "react";
import classes from "./Controllers.module.css";
const Controllers = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More} onClick={props.add}>ADD</button>
      <button className={classes.Less} onClick={props.remove}>REMOVE</button>
    </div>
  );
};

export default Controllers;
