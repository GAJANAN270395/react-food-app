import React, { useState, useEffect } from 'react';
import MealItem from './MealItem/MealItem';
import Card from '../../UI/Card';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://reactlearning-cd2dc-default-rtdb.firebaseio.com/meals.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const responseData = await response.json();
      const loadedMeal = [];
      for (const key in responseData) {
        loadedMeal.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeal);
    };
    fetchMeals().catch((error) => console.log(error.message));
  }, []);
  console.log(meals);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
