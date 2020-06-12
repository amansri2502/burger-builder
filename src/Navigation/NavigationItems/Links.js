// this functional component is used to customise each link in navBar

import React from "react";
import classes from "./Links.module.css";


const Links = (props) => (
  <li className={classes.Links}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);
export default Links;
