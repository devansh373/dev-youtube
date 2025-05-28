import React from "react";

const Filters = () => {
  const filters = [
    { name: "All", id: 1 },
    { name: "Music", id: 2 },
    { name: "Gaming", id: 3 },
    { name: "News", id: 4 },
    { name: "Sports", id: 5 },
    { name: "Live", id: 6 },
    { name: "Fashion & Beauty", id: 7 },
    { name: "Learning", id: 8 },
    { name: "Entertainment", id: 9 },
    { name: "Science & Technology", id: 10 },
  ];
  return (
    <div>
      <div className="flex gap-4 p-4  shadow-lg">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
