import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData();
    const mealsItem = meals.meals;
    console.log(mealsItem);

    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-5 mt-10">Enjoy Our Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                {
                    mealsItem.map((item, index) => <Meal key={index} item={item}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;