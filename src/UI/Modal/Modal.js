import React, { Component } from "react";
import classes from "./Modal.module.css";
import Aux from "../../hoc/Auxilary";
import Backdrop from "../Backdrop/BackDrop";

class Model extends Component {
  // as model was present in burger builder which manages state so it was changing even when it was invisible so here by using shouldComponentUpdate we are checking if model is visible then only it should be rebuild
  shouldComponentUpdate(nextProp, nextState) {
    return nextProp.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        {/* black shadow */}
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <div
          className={classes.Modal}
          //inline style
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {/* ordersummary passed as children */}
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Model;
