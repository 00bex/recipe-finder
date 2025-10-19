import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-between">
        <div className="flex-grow max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">
            About Us
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-green-600">Savora</span> — 
            your go-to destination for discovering, sharing, and exploring the 
            world of food. Our mission is to inspire culinary creativity by making 
            it easy for food lovers everywhere to find the perfect recipe for every 
            craving and occasion.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Whether you’re an experienced chef or a beginner in the kitchen, 
            we’ve created a space where you can access thousands of recipes, 
            learn new techniques, and connect with a global community of 
            food enthusiasts who share your passion for cooking.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            At Savora, we believe that cooking is more than just preparing food,
            it’s a way to share love, culture, and creativity. Our platform brings 
            together the finest recipes and culinary inspiration to help you 
            create memorable meals and experiences.
          </p>
          <p className="text-lg leading-relaxed">
            Thank you for choosing Savora — where every recipe tells a story, 
            and every dish connects us all through the joy of food.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
