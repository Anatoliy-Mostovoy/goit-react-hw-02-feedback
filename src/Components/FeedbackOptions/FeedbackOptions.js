import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={s.buttonContainer}>
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
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
