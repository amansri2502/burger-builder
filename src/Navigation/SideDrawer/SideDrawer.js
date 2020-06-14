import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/BackDrop";
import Aux from "../../hoc/Auxilary";

const SideDrawer = (props) => {
  let sideDrawer = [classes.SideDrawer, classes.close];
  if (props.open) {
    sideDrawer = [classes.SideDrawer, classes.open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.clicked}></Backdrop>
      <div className={sideDrawer.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
export default SideDrawer;
