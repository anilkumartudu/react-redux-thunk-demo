import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counterArray: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_COUNTER:
      return {
        counterArray: state.counterArray.concat({
          id: new Date(),
          value: action.storeCounter
        })
      };

    case actionTypes.DELETE_COUNTER:
      const updateCounterArray = state.counterArray.filter(
        item => item.id !== action.deleteCounterId
      );
      return {
        counterArray: updateCounterArray
      };
  }
  return state;
};

export default reducer;
