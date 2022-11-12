import React from 'react';
import css from './Button.module.css';

export const Button = ({ text, clickHandler }) => {
  return (
    <button className={css.Button} type="button" onClick={clickHandler}>
      {text}
    </button>
  );
};
