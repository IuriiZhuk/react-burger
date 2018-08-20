import React from 'react';

import Auxillary from '../../../hoc/Auxiliary';

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={igKey + i}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxillary>
      <h2>Your order </h2>
      <p> You burger with following ingredients : </p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue for checkout ?</p>
    </Auxillary>
  );
};

export default OrderSummary;
