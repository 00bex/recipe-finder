import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import App from "../App";

const Home = () => {
    
    return ( 
        <>
        
        <Navbar/>
        <div className="p-6">
        <h2 className=" text-2xl mx auto"> Your No.1 <span className="text-green-400 font-bold">Food Recipe</span> App for Culinary Inspirations     </h2>
        <h4 className="" > Explore thousands of recipes for every craving and occassion</h4>     
        <App/>
        <Footer/>

        
        </div>
        
        </>
        
    )
}

export default Home