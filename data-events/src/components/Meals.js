import { useState } from 'react';


const MealsList = () => {
    const todaysMeals = [
        {
            "name": "BakedBeans", "calories": 80, "id": 12345
        },
        {
            "name": "Grilled Veggies", "calories": 80, "id": 23456
        },
        {
            "name": "Soup", "calories": 100, "id": 34567
        },

    ]

    const [meals, setMeals] = useState(todaysMeals);

}