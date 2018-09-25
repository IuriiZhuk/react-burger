import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId,
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password, isSignup) => {
  return dispath => {
    dispath(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDiEh-cg3tkeaYjSXZfW8Qs-9-S1gNbGpw';
    if (!isSignup) {
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDiEh-cg3tkeaYjSXZfW8Qs-9-S1gNbGpw';
    }
    axios
      .post(url, authData)
      .then(response => {
        dispath(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch(error => dispath(authFail(error)));
  };
};
