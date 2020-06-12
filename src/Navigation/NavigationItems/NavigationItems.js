import React  from 'react'
import classes from './NavigationItems.module.css'
import Links from './Links'

const NavigationItems = ()=>(

<ul className={classes.NavigationItems}>
    <Links link="/" active={true}>Burger Builder</Links>
    <Links link="/" active={false}>Checkout</Links>
</ul>
);
export default NavigationItems;