import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer ', () => {
  it('should return an initial State', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectedPath: '/',
    });
  });

  it('should store the token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectedPath: '/',
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: 'some_token',
          userId: 'some-user-id',
        }
      )
    ).toEqual({
      token: 'some_token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectedPath: '/',
    });
  });
});
