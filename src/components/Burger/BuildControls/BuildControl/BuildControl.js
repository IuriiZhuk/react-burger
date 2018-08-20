import React from 'react';

import classes from './BuildControl.css';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div>{props.label}</div>
    <button onClick={props.ingredientRemoved}>Remove</button>
    <button onClick={props.ingredientAdded}>Add</button>
  </div>
);

export default BuildControl;
