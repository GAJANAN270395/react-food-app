import React from 'react';
import './style.css';
import Header from './Components/Header/Header.js';
import Meals from './Components/Meals/Meals.js';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
