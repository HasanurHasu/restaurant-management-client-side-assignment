import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const navLinks = <>
        <div className="flex justify-center gap-5 items-center text-white font-medium">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/allFoodItems'>All Food Items</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    </>
    return (

        <div className="bg-orange-600">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="normal-case text-3xl text-white">Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="m-1">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2842_0.jpg" />
                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
                            <li className="hover:bg-red-500 rounded-md"><button className="hover:text-white">Added food items</button></li>
                            <li className="hover:bg-red-500 rounded-md"><button className="hover:text-white">Add a food item</button></li>
                            <li className="hover:bg-red-500 rounded-md"><button className="hover:text-white">My ordered food items</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;