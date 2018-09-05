import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactDate.css';
import axios from '../../../axios-orders';

class ContactDate extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = event => {
    console.log(`from orderHandler ContactDate`);

    event.preventDefault();

    this.setState({
      loading: true,
    });

    // alert(`You are continue!`);

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'UserTest',
        address: {
          street: 'StreetTest',
          zip: '4385674',
          country: 'Zimbaba',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'faster',
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch(error =>
        this.setState({
          loading: false,
        })
      );
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          {' '}
          ORDER
        </Button>
      </form>
    );

    if (this.setState.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactDate}>
        <h4>Enter you information</h4>
        {form}
      </div>
    );
  }
}
export default ContactDate;
