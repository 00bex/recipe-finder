import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <Link to = "/" className="text-2xl font-bold hover:text-yellow-200"> Savora 🍲
            </Link>
            <div className="space-x-4">
                <Link to= "/" className="" >Home</Link>
                 <Link to ="/about" className="">About Us</Link>
                 <Link to = "/categories" className="">Categories</Link>
            </div>




        </nav> 
    )
}
export default Navbar;