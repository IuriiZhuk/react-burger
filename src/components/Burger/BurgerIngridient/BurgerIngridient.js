import React from 'react';

import classes from './BurgerIngridient.css';

const BurgerIngridient = props => {
  let ingridient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingridient = <div className={classes['bread-bottom']} />;
      break;
    case 'bread-top':
      ingridient = (
        <div className={classes['bread-top']}>
          <div className={classes['seeds']} />
          <div className={classes['seeds2']} />
        </div>
      );
      break;
    case 'salad':
      ingridient = <div className={classes['salad']} />;
      break;

    case 'meat':
      ingridient = <div className={classes['meat']} />;
      break;

    case 'bacon':
      ingridient = <div className={classes['bacon']} />;
      break;
    case 'cheese':
      ingridient = <div className={classes['cheese']} />;
      break;
    default:
      ingridient = null;
  }

  return ingridient;
};

export default BurgerIngridient;
