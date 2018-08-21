import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div>{props.label}</div>
    <button onClick={props.ingredientRemoved} disabled={props.disabled}>
      Remove
    </button>
    <button onClick={props.ingredientAdded}>Add</button>
  </div>
);

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
};

export default BuildControl;
