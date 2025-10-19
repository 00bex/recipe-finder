
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // useParams gets ID from URL

// Import our API helper (we’ll reuse the same API to fetch a single recipe)
import { fetchRecipeById } from "../api/recipeApi";

const RecipeDetails = () => {
  // Extract the dynamic `id` from the URL (e.g. /recipe/52772)
  const { id } = useParams();

  // Define state variables
  const [recipe, setRecipe] = useState(null); // store fetched recipe data
  const [loading, setLoading] = useState(true); // show loading spinner
  const [error, setError] = useState(""); // show errors if any

  // useEffect runs when the component loads (or when id changes)
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data = await fetchRecipeById(id); // get single recipe by ID
        setRecipe(data); // store result
      } catch (err) {
        setError("Unable to fetch recipe details. Please try again later.");
      } finally {
        setLoading(false); // hide loading spinner
      }
    };

    getRecipe(); // call the function
  }, [id]); // depend on id so it re-runs when a different recipe is clicked

  // While data is loading
  if (loading) {
    return (
      <p className="text-center text-gray-600 mt-10 animate-pulse">
        Loading recipe details...
      </p>
    );
  }

  // If an error occurred
  if (error) {
    return (
      <p className="text-center text-red-500 font-medium mt-10">{error}</p>
    );
  }

  // If no recipe found
  if (!recipe) {
    return (
      <p className="text-center text-gray-700 mt-10">
        Recipe not found. Go back and try another one.
      </p>
    );
  }

  // 🧾 Display recipe details
  return (
    <div className="bg-orange-50 min-h-screen px-4 py-10">
      {/* Back to home link */}
      <Link
        to="/"
        className="text-orange-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to search
      </Link>

      {/* Recipe Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {recipe.strMeal}
      </h1>

      {/* Recipe Image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full max-w-xl mx-auto rounded-xl shadow-lg mb-8"
      />

      {/* Recipe Info */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <p className="text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Category:</span>{" "}
          {recipe.strCategory}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Area:</span>{" "}
          {recipe.strArea}
        </p>

        {/* Instructions */}
        <h2 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
          Instructions
        </h2>
        <p className="text-gray-700 leading-relaxed">{recipe.strInstructions}</p>

        {/* Ingredients */}
        <h2 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {/* We’ll map ingredients dynamically */}
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .map((num) => {
              const ingredient = recipe[`strIngredient${num}`];
              const measure = recipe[`strMeasure${num}`];
              if (ingredient && ingredient.trim() !== "") {
                return (
                  <li key={num}>
                    {ingredient} — {measure}
                  </li>
                );
              }
              return null;
            })
            .filter(Boolean)}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
