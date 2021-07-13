import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Value from './Value/Value';
import s from './Counter.module.css';

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }
  state = { value: 7 }; //! публичное свой-во

  // buttonIncrement = event => {
  //   this.setState({ value: 10 });
  // };

  buttonIncrement = () => {
    this.setState(currentValue => {
      return {
        value: currentValue.value + 1,
      };
    });
  };

  buttonDecrement = () => {
    this.setState(currentValue => {
      return {
        value: currentValue.value - 1,
      };
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div className={s.Counter}>
        <Value value={value} />
        <Controls
          onIncrement={this.buttonIncrement}
          onDecrement={this.buttonDecrement}
        />
      </div>
    );
  }
}

export default Counter;
