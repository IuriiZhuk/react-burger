import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  };
  componentWillUpdate() {
    // console.log(`[Modal] componentWillUpdate`);
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

Modal.propTypes = {
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
