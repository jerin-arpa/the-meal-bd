import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;

    return (
        <div className='p-5 shadow-2xl rounded-xl'>
            <div className='flex justify-center'>
                <img className='my-5' src={strCategoryThumb} alt="" />
            </div>
            <h2 className='text-3xl font-bold text-center mb-4'>{strCategory}</h2>
            <p className='h-36 text-ellipsis overflow-hidden ...'>{strCategoryDescription}
            </p>


            <Link className='my-5 flex justify-center' to="/meals">
                <button className='btn'>All Menu</button>
            </Link>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired,
};

export default Category;