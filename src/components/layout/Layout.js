//external Rapper component

import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.module.css"
import ToolBar from "../../Navigation/ToolBar/Toolbar";
const Layout = (props) => {
  return (
    <Aux>
      <ToolBar></ToolBar>
      <div>side bar </div>
      <main className={classes.Content}> {props.children}</main>
    </Aux>
  );
};
export default Layout;
