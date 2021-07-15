import React, { Component } from 'react';
import s from './Statistics/Statistics.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handelBtnClick = event => {
    this.setState(prevState => {
      const { target } = event;
      const value = target.textContent.toLowerCase();
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
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handelBtnClick}
          />
        </div>
        <h2 className={s.secondTitle}>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercentage={this.countPositiveFeedbackPercentage(
            good,
            neutral,
            bad,
          )}
        />
      </div>
    );
  }
}
