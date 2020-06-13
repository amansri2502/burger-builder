import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const ToolBar = (props) => (
  <header className={classes.ToolBar}>
    <div> Menu</div>
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default ToolBar;
