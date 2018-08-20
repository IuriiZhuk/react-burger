import React from 'react';

import Auxillary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
      <p>
        <strong>Total Price : {props.tolalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue for checkout ?</p>
      <Button clicked={props.purchaseCancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} btnType="Success">
        CONTINUE
      </Button>
    </Auxillary>
  );
};

export default OrderSummary;
