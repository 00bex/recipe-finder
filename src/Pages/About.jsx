import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (

    <div className="p-6">
     <Navbar/>
      
      <p className="text-gray-700">
        Savora is your modern recipe companion — find, cook, and enjoy delicious dishes from around the world.
      </p>
      <Footer/>
    </div>
  );
};

export default About;
