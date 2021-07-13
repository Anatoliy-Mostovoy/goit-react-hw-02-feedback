import React from 'react';
import s from './Value.module.css';

const Value = ({ value }) => <span className={s.CounterValue}>{value}</span>;

export default Value;
