import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between mt-5">
                <div className="flex gap-2">
                    <img className="w-10" src="https://www.themealdb.com/images/ingredients/Lime.png" alt="" />
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">TheMealBd</h2>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <NavLink to="/" className='hover:bg-slate-100 py-2 px-5 rounded-lg mr-3'>Home</NavLink>
                        <NavLink to="/categories" className='hover:bg-slate-100 py-2 px-5 rounded-lg mr-3'>Category</NavLink>
                        <NavLink to="/about" className='hover:bg-slate-100 py-2 px-5 rounded-lg mr-3'>About Us</NavLink>
                        <NavLink to="/contact" className='hover:bg-slate-100 py-2 px-5 rounded-lg'>Contact Us</NavLink>
                    </div>
                </div>
            </nav>
            <hr className="my-5" />
        </div>
    );
};

export default Header;