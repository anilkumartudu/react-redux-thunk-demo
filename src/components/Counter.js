import React, { Fragment } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions";

const Counter = props => {
  let {
    counter,
    counterArray,
    onCounterIncrement,
    onCounterDecrement,
    onCounterStore,
    onCounterDelete
  } = props;

  let renderMessage = "";

  if (counterArray.length !== 0) {
    renderMessage = (
      <p>To delete counter press on the counter you want to delete.</p>
    );
  }

  return (
    <Fragment>
      <p>
        Store functions is delayed by 2 seconds to show asynchronous flow using
        redux-thunk.
      </p>
      Counter : {counter}
      <br />
      <button onClick={onCounterIncrement}>INCREMENT COUNTER</button>
      <button onClick={onCounterDecrement}>DECREMENT COUNTER</button>
      <button onClick={() => onCounterStore(counter)}>STORE COUNTER</button>
      <br />
      {renderMessage}
      <ul>
        {counterArray.map(item => (
          <li key={item.id} onClick={() => onCounterDelete(item.id)}>
            {item.value}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    counterArray: state.storeReducer.counterArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCounterIncrement: () => dispatch(actionCreators.increment()),
    onCounterDecrement: () => dispatch(actionCreators.decrement()),
    onCounterStore: storeCounter =>
      dispatch(actionCreators.storeCounter(storeCounter)),
    onCounterDelete: deleteCounterId =>
      dispatch(actionCreators.deleteCounter(deleteCounterId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
