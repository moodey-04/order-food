import { useEffect, useState } from "react";
import "../../index.css";
import { fetchMeals } from "../../https";
import MealItem from "./mealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const data = await fetchMeals();
      if (data) {
        setMeals(data);
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div id="meals">
      {isLoading ? (
        <>
          {meals.map((item) => {
            return <MealItem key={item.id} item={item} />;
          })}
        </>
      ) : (
        <>Fetching meal...</>
      )}
    </div>
  );
};

export default Meals;
