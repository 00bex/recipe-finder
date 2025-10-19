import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchRecipes } from "../api/recipeApi";
import { Link } from "react-router-dom";

const Categories = () => {
  // 💡 List of predefined categories
  const categories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
  ];

  const [selectedCategory, setSelectedCategory] = useState(""); // The category clicked by the user
  const [recipes, setRecipes] = useState([]); // Recipes fetched from the API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setError("No recipes found for this category 😔");
      }
    } catch (err) {
      setError("Error fetching recipes. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h screen ">   

        <Navbar />

      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
           Categories 🍽️
        </h1>

        {/* 🔹 Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full border transition duration-300 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🔹 Loading & Error */}
        {loading && (
          <p className="text-gray-500 animate-pulse">
            Loading recipes for {selectedCategory}...
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {/* 🔹 Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe.idMeal}
              to={`/recipe/${recipe.idMeal}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {recipe.strMeal}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />

    </div>
      
      
    
  );
};

export default Categories;
