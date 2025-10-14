// src/components/SearchBar.jsx
import React, { useState } from "react";

/**
 * SearchBar Component
 * -------------------
 * Allows the user to type a recipe name and trigger a search.
 * Uses local component state to store the search input value.
 */
const SearchBar = ({ onSearch }) => {
  // 1️⃣ Define a state variable to hold the user’s input text
  const [searchTerm, setSearchTerm] = useState("");

  // 2️⃣ Function runs when the search form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (searchTerm.trim()) {
      onSearch(searchTerm); // trigger the search passed from parent
      setSearchTerm(""); // optional: clear input after search
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 p-4 w-full max-w-md mx-auto"
    >
      
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
      />

      <button
        type="submit"
        className="bg-orange-500 text-white font-medium px-4 py-2 rounded-full hover:bg-orange-600 active:scale-95 transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
