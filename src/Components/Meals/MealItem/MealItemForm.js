import React from 'react';
import classes from './MealItemForm.module.css';
const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <input type="number" min="1" max="5" />
      <button> ADD </button>
    </form>
  );
};
export default MealItemForm;
