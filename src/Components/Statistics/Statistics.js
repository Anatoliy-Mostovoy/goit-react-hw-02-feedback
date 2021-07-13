import React, { Component } from 'react';
import s from './Statistics.module.css';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  buttonNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  buttonBad = prevState => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div className={s.container}>
        <h1 className={s.mainTitle}>Please leave feedback</h1>
        <div className={s.buttonContainer}>
          <button type="button" className={s.button} onClick={this.buttonGood}>
            Good
          </button>
          <button
            type="button"
            className={s.button}
            onClick={this.buttonNeutral}
          >
            Neutral
          </button>
          <button type="button" className={s.button} onClick={this.buttonBad}>
            Bad
          </button>
        </div>
        <h2 className={s.secondTitle}>Statistics</h2>
        <div className={s.titleList}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {total === 0 ? 0 : (good / total) * 100}%</p>
        </div>
      </div>
    );
  }
}
