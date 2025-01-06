import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div
      className="flex items-center mt-4 bg-gray-600/20 backdrop-blur-sm py-1 px-4 rounded-full w-[350px] h-[53px] mx-auto border-2 border-white
       "
    >
      <button className=" text-white rounded-full">
        <IoSearch size={24} />
      </button>
      <input
        type="text"
        placeholder="Search Movies/Show..."
        className="flex-1 bg-transparent text-white placeholder:text-base placeholder:font-semibold placeholder-white outline-none p-2"
      />
    </div>
  );
};

export default SearchBar;
