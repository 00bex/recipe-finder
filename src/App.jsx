
import React, { useState , useEffect } from "react"; 
import SearchBar from "./components/SearchBar"; 
import { fetchRecipes } from "./api/recipeApi"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




const App = () => {
  const [categoryRecipes, setCategoryRecipes] = useState({});
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

     const categorized = {};

     defaultCategories.forEach((category, index) => {
       categorized[category] = results[index]?.meals?.slice(0, 4) || [];
     });

setCategoryRecipes(categorized);

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
      
      <div className="max-w-7xl mx-auto mt-10 space-y-12">

  {defaultCategories.map((category) => (
    <section key={category}>
      <h3 className="text-2xl font-bold text-orange-600 mb-4">
        {category} Recipes
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categoryRecipes[category]?.map((recipe) => (
          <Link
            to={`/recipe/${recipe.idMeal}`}
            key={recipe.idMeal}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition"
          >
            {/*Recipe image*/}
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"

            />
             {/*Recipe info */}
            <div className="p-4">
              <h2 className="font-semibold text-gray-800">
                {recipe.strMeal}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  ))}

</div>

      
    </div>
  );
};



export default App;
