import React from 'react';
import classes from './checkoutSummary.module.css';
import Burger from './../Burger/Burger'
import Button from './../../UI/Buttons/Button'

const CheckoutSummary=(props)=>{
    
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it will fill u with Jnpm oy!!!</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={null}>CANCEL</Button>
            <Button btnType="Success" clicked={null}>CONTINUE</Button>

        </div>

    );
}


        
    





export default CheckoutSummary;