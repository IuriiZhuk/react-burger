import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};

export const fetchIngredientsFail = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL,
  };
};

export const initIngredients = () => {
  return dispath => {
    axios
      .get('https://react-study-burger.firebaseio.com/ingredients.json')
      .then(response => {
        dispath(setIngredients(response.data));
      })
      .catch(err => {
        dispath(fetchIngredientsFail());
      });
  };
};
