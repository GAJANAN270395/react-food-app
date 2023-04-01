import React from 'react';
import classes from './Header.module.css';
import CartIcon from '../Cart/CartIcon.js';
import HeaderCartButton from './HeaderCartButton.js';
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Food App </h1>
        <HeaderCartButton />
      </header>

     <div className={classes.hero}>
     <div className={classes.hero_content}>
        <h2>React Food Store </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          voluptate inventore ullam illo dignissimos sit.
        </p>
      </div>
     </div>
    </>
  );
};
export default Header;
