import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactDate.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactDate extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
      },
      zip: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: '',
      },
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
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
          />
        ))}
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