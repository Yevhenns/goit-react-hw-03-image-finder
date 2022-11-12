import React from 'react';
import css from './Button.module.css';

export const Button = ({ text, сlickHandler }) => {
  return (
    <button className={css.Button} type="button" onClick={сlickHandler}>
      {text}
    </button>
  );
};
