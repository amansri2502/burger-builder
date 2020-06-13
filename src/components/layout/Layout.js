//external Rapper component

import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.module.css"
import ToolBar from "../../Navigation/ToolBar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
const Layout = (props) => {
  return (
    <Aux>
      <ToolBar></ToolBar>
      <SideDrawer/>
      <main className={classes.Content}> {props.children}</main>
    </Aux>
  );
};
export default Layout;
