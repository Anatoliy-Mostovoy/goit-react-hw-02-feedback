import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={s.button}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
