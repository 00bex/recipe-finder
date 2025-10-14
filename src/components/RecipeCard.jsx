export default function RecipeCard({ meal, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition"
    >
      {/* Recipe image */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />

      {/* Text content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{meal.strMeal}</h2>
        <p className="text-sm text-gray-600">
          {meal.strCategory} • {meal.strArea}
        </p>
      </div>
    </div>
  );
}
