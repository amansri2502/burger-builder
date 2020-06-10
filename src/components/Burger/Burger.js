import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = (props) => {
  let fetchedIngredient = Object.keys(props.ingredients)
  .map(igKey => {
    return [
      ...Array(props.ingredients[igKey])].map((_,i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    
}).reduce((arr,el)=>{
  return arr.concat(el)
},[]);

if(fetchedIngredient.length===0){
  fetchedIngredient=<p>ADD ITEMS TO BURGER</p>
}

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
     {fetchedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
