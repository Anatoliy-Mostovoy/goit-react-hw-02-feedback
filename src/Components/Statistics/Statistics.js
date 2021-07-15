import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={s.titleList}>
      <p style={{ color: 'green' }}>Good: {good}</p>
      <p style={{ color: 'yellow' }}>Neutral: {neutral}</p>
      <p style={{ color: 'Red' }}>Bad: {bad}</p>
      <p style={{ color: 'orange', fontSize: 25 }}>Total: {total}</p>
      <p style={{ color: 'orange', fontSize: 25 }}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
