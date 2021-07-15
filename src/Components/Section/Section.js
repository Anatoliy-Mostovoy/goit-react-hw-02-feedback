import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={s.mainTitle}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
