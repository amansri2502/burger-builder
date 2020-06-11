import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = (props) => {



  // object.key fetches each key from the object and forms a array of key values
  // these key values are extracted one by one and depending on valuse in them an Array(value ) is called which forms array of the length that of the value specified
  // then after that an array of array is created which contains all the items in the same no as that of in the value of Array(value)
  let fetchedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // as it is a array of elements so an key is required for each item that key should be unique
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
      //  reduce helps to determine if the array is made of empty array elements by extracting these arrays and then there values if they are empty a paragraph is rendered
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);



  // Rendered if no item added
  if (fetchedIngredient.length === 0) {
    fetchedIngredient = <p>ADD ITEMS TO BURGER</p>;
  }

  

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {/* Array of Burger ingredients */}
      {fetchedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
