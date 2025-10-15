
import React, { useState } from "react";


const SearchBar = ({ onSearch }) => {
 
  const [searchTerm, setSearchTerm] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm); 
      setSearchTerm(""); 
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
