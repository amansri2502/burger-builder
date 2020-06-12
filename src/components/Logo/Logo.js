import React from "react";
// this syntex is used to add the image due to how this project gets bundled at end
import BurgerLogo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt=""></img>
  </div>
);
export default Logo;
