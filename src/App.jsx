
import React, { useState , useEffect } from "react"; 
import SearchBar from "./components/SearchBar"; 
import { fetchRecipes } from "./api/recipeApi"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




const App = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const defaultCategories = [

  "Beef",
  "Chicken",
  "Dessert",
  "Seafood",
  "Vegetarian",

];


  //Function to handle the search request from SearchBar
  const handleSearch = async (query) => {
    setLoading(true); 
    setError(""); 

    const data = await fetchRecipes(query); // call our API utility

    // If no results found
    if (data.length === 0) {
      setError("No recipes found. Try another dish name!");
    }

    // Store fetched recipes in state
    setRecipes(data);

    setLoading(false); 
  };

  useEffect(() => {
  const loadDefaultRecipes = async () => {
    setLoading(true);
    setError("");

    try {
      const requests = defaultCategories.map((category) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        ).then((res) => res.json())
      );

      const results = await Promise.all(requests);

      const mixedRecipes = results
        .flatMap((result) => result.meals || [])
        .slice(0, 20); // limit total recipes

      setRecipes(mixedRecipes);
    } catch (err) {
      setError("Failed to load featured recipes 😔");
    }

    setLoading(false);
  };

  loadDefaultRecipes();
}, []);


  return (
    <div className="min-h-full px-4">
    
      

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-gray-600 mt-4 animate-pulse">
          Loading delicious recipes....
        </p>
      )}

      {error && (
        <p className="text-red-500 font-medium mt-4">{error}</p>
      )}
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.idMeal}`} // Clicking navigates to details page
            key={recipe.idMeal}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
          >
            {/* Recipe image */}
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />

            {/* Recipe info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {recipe.strMeal}
              </h2>
              <p className="text-sm text-gray-500">
                {recipe.strCategory} • {recipe.strArea}
              </p>
            </div>
          </Link>
        ))}
      </div>

      </div>
      
      
    </div>
  );
};



export default App;
