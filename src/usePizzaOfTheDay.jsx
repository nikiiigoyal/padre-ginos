import { useEffect, useState, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    async function fetchPizzaOfTheDay() {
      try {
        const response = await fetch(`${apiUrl}/api/pizza-of-the-day`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizzaOfTheDay(data);
      } catch (error) {
        console.error("Failed to fetch pizza of the day:", error);
        // You might want to set an error state here
      }
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
