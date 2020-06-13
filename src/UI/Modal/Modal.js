import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../hoc/Auxilary";
import Backdrop from "../Backdrop/BackDrop";

const Model = (props) => {
  return (
    <Aux>
      {/* black shadow */}
      <Backdrop show={props.show} clicked={props.clicked} />
      <div
        className={classes.Modal}
        //inline style
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {/* ordersummary passed as children */}
        {props.children}
      </div>
    </Aux>
  );
};
export default Model;
