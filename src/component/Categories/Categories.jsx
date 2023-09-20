import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {

    const categories = useLoaderData();
    const mealsCategory = categories.categories;
    console.log(mealsCategory);

    return (
        <div>
            <h1 className="text-center my-5">Meal Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    mealsCategory.map(category => <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;