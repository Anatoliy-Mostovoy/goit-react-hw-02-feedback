import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={s.titleList}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}
