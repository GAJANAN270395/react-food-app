import React, { useState, useRef } from 'react';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(amountInputRef.current.value);

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        ref={amountInputRef}
        type="number"
        min="1"
        step="1"
        defaultValue="1"
      />
      <button> Add</button>
      {!amountIsValid && <p>Please enter value between 1-5.</p>}
    </form>
  );
};
export default MealItemForm;
