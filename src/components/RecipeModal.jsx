import React from "react";

export default function RecipeModal({ meal, onClose }) {
  return (
    <div className=" ">
      
      <div  className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-accent"
        >
          ✕
        </button>

   
        <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>

       
        <p className="text-gray-700">Ingredients and instructions will appear here.</p>
      </div>
    </div>
  );
}
