function CategoryFilter({ categories, currentFilter, onFilterChange }) {
  return (
    <div className="flex gap-2 mb-6">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-md ${
            currentFilter === category 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;