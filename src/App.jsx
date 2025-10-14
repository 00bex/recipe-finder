
import React, { useState } from "react"; 
import SearchBar from "./components/SearchBar"; 
import { fetchRecipes } from "./api/recipeApi"; 


const App = () => {
  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);

 
  const [error, setError] = useState("");

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

  return (
    <div className="min-h-screen bg-orange-50  px-4">
    
      <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mt-8 mb-4">
        Savora 🍲
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-gray-600 mt-4 animate-pulse">
          Searching recipes...
        </p>
      )}

      {error && (
        <p className="text-red-500 font-medium mt-4">{error}</p>
      )}

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
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
              <p className="text-sm text-gray-500">
                {recipe.strCategory} • {recipe.strArea}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
