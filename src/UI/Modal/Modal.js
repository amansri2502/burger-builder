import React from "react";
import classes from "./Modal.module.css";

const Model = (props) => {
  return <div className={classes.Modal}>{props.children}</div>;
};
export default Model;
