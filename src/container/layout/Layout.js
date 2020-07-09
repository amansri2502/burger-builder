//external Rapper component

import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.module.css";
import ToolBar from "../../Navigation/ToolBar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state={
    showSideDrawer:false
  }

  sideDrawerHandler=()=>{
    this.setState({showSideDrawer:false})
  }

  showSideDrawerToggler=()=>{
    this.setState((prevState)=>{
      return{ showSideDrawer:!prevState.showSideDrawer}
    })
  }
  render() {
    return (
      <Aux>
        <ToolBar  clicked={this.showSideDrawerToggler}></ToolBar>
        <SideDrawer open={this.state.showSideDrawer} clicked={this.sideDrawerHandler}/>
        <main className={classes.Content}> {this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
