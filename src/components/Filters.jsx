import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../utils/appSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store=>store.app.filter)
  const [activeFilter, setActiveFilter] = useState(filter);
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
    <div className="max-w-screen w-full shadow-lg overflow-x-auto">
      <div className="overflow-x-auto flex gap-4 px-4 py-2 whitespace-nowrap" >
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-4 py-2 bg-gray-100 rounded-full min-w-fit  text-sm font-medium hover:bg-gray-400 cursor-pointer transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 ${filter.name===activeFilter && "bg-gray-400 dark:bg-gray-700"}`}
            onClick={() => {
              setActiveFilter(filter.name);
              dispatch(setFilter(filter.name));
            }}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
