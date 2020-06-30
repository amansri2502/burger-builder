import React from "react";
import classes from "./NavigationItems.module.css";
import Links from "./Links";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <Links link="/">Burger Builder</Links>
    <Links link="/orders" exact>Orders</Links>
  </ul>
);
export default NavigationItems;
