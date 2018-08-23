import React, { Component } from 'react';

import Auxillary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    // console.log(`[OrderSummary] willUpdate`);
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igKey, i) => {
        return (
          <li key={igKey + i}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxillary>
        <h2>Your order </h2>
        <p> You burger with following ingredients : </p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price : {this.props.tolalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue for checkout ?</p>
        <Button clicked={this.props.purchaseCancel} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">
          CONTINUE
        </Button>
      </Auxillary>
    );
  }
}

export default OrderSummary;
