import React, { Component } from 'react';
import s from './Statistics.module.css';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = event => {
    this.setState(prevState => {
      const value = event.target.textContent.toLowerCase();
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return (total === 0 ? 0 : (good / total) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.container}>
        <h1 className={s.mainTitle}>Please leave feedback</h1>
        <div className={s.buttonContainer}>
          <button
            type="button"
            className={s.button}
            onClick={this.onButtonClick}
          >
            Good
          </button>
          <button
            type="button"
            className={s.button}
            onClick={this.onButtonClick}
          >
            Neutral
          </button>
          <button
            type="button"
            className={s.button}
            onClick={this.onButtonClick}
          >
            Bad
          </button>
        </div>
        <h2 className={s.secondTitle}>Statistics</h2>
        <div className={s.titleList}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>
            Total:
            {this.countTotalFeedback(good, neutral, bad)}
          </p>
          <p>
            Positive feedback:
            {this.countPositiveFeedbackPercentage(good, neutral, bad)}%
          </p>
        </div>
      </div>
    );
  }
}
