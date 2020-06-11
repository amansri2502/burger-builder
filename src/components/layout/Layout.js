//external Rapper component

import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.module.css"
const Layout = (props) => {
  return (
    <Aux>
      <div>side bar </div>
      <main className={classes.Content}> {props.children}</main>
    </Aux>
  );
};
export default Layout;
