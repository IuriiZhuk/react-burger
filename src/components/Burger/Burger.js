import React from 'react';

import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + 1} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedIngredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;
