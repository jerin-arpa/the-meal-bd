import PropTypes from 'prop-types';

const Meal = ({ item }) => {
    const { strMeal, strMealThumb } = item;

    function generateRandomPrice(min, max, precision) {
        const randomValue = Math.random() * (max - min) + min;
        return parseFloat(randomValue.toFixed(precision));
    }

    const minPrice = 50.00;
    const maxPrice = 300.00;
    const decimalPlaces = 2;
    const randomPrice = generateRandomPrice(minPrice, maxPrice, decimalPlaces);

    return (
        <div className='shadow-2xl p-5 rounded-2xl'>
            <img className='rounded-xl' src={strMealThumb} alt="" />
            <h2 className='text-2xl font-bold text-center h-10 overflow-scroll overflow-x-hidden pr-3 mt-5 mb-3'>{strMeal}</h2>
            <div className='flex justify-center'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>

            <div>
                <p className='text-xl font-bold text-center mt-2'>Price: ${randomPrice}</p>
            </div>

            <div className='flex justify-center mt-2'>
                <button className='btn'>Show Details</button>
            </div>
        </div>
    );
};

Meal.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Meal;