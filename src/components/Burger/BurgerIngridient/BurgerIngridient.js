import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngridient.css';

class BurgerIngridient extends Component {
  render() {
    let ingridient = null;

    switch (this.props.type) {
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
        ingridient = <div className={classes.cheese} />;
        break;
      default:
        ingridient = null;
    }

    return ingridient;
  }
}

BurgerIngridient.propTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIngridient;
