import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";


const ToolBar = (props) => (
  <header className={classes.ToolBar}>
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default ToolBar;
