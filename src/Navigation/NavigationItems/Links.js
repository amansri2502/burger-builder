// this functional component is used to customise each link in navBar

import React from "react";
import classes from "./Links.module.css";
// Navlink can be used to prevent refresing of page 
import {NavLink}from "react-router-dom"


const Links = (props) => (
  <li className={classes.Links}>
    {/*  NavLink Automatically adds a active class but it also has a active class name prop that we are using due to changed name by classes module */}
    <NavLink exact to={props.link} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);
export default Links;
