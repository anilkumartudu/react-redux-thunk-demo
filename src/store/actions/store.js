import * as actionTypes from "./actionTypes";

export const saveCounter = response => {
  return {
    type: actionTypes.STORE_COUNTER,
    storeCounter: response
  };
};

export const storeCounter = storeCounter => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveCounter(storeCounter));
    }, 2000);
  };
};

export const deleteCounter = deleteCounterId => {
  return {
    type: actionTypes.DELETE_COUNTER,
    deleteCounterId
  };
};
