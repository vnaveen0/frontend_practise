import {useMealsListContext} from '../providers/MealsProvider';

export default function Counter() {
    const {meals} = useMealsListContext();
    return (
        <div>
            <h4> Number of meals today: {meals.length} </h4>
        </div>
    )

}