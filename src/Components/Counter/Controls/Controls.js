import React from 'react';
import s from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button className={s.Button} type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button className={s.Button} type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
