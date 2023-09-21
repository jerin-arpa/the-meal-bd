import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {

    const categories = useLoaderData();
    const mealsCategory = categories.categories;
    console.log(mealsCategory);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-5 mt-10">Meal Categories</h1>
            <div className="flex justify-center">
                <hr className="w-1/3 mb-5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    mealsCategory.map(category => <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;