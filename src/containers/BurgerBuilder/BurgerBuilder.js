import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => sum + el, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const disableinfo = {
      ...this.props.ings,
    };
    for (let key in disableinfo) {
      disableinfo[key] = disableinfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = <Spinner />;
    if (this.props.ings) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemove={this.props.onIngredientRemoved}
            disabled={disableinfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            purchasing={this.purchaseHandler}
          />
        </Auxiliary>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          tolalPrice={this.props.price}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
    }
    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>

        {burger}
      </Auxiliary>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: ingName =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
