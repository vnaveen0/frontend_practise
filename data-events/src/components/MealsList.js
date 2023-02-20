import { useMealsListContext } from '../providers/MealsProvider';

const MealsList = () => {
    const { meals } = useMealsListContext();

    return (
        <div>
            <h1> Meals List Using Context API</h1>
            {
                meals.map(
                    (meal, index) => (
                        <div
                            style={
                                {
                                    border: "2px solid orange",
                                    width: "25%"
                                }}>
                            <h2 key={index}> {meal}</h2>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default MealsList;