import React from "react";
import SearchBar from "./searchbar";

const Text = () => {
  return (
    <div className="relative mx-auto h-[852px] w-[1504px] p-1">
      <img
        src="/uLqNGzJwnj8JKkKuRM2dHWJKCtc.jpg"
        alt=""
        className="absolute h-full w-full brightness-[0.6] rounded-lg"
      />
      <SearchBar />
      <div className="absolute gap-6 flex flex-col text-white p-3 bottom-32 w-[550px]">
        <h1 className="font-bold text-7xl">Azrael</h1>
        <p className="text-2xl h-[93px] ps-2 font-semibold line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
          amet voluptatem temporibus, excepturi corrupti maxime repellat porro
          harum libero fugiat inventore est fuga illo, aperiam reiciendis quo
          veniam, rerum debitis provident.
        </p>
        <div className="flex gap-2 font-bold text-lg">
          <h2 className="rounded-full px-3 py-1 bg-yellow-500 text-black">
            IMDB: <span className="font-semibold">6.0</span>
          </h2>
          <h2 className="rounded-full px-3 py-1 bg-white text-black">
            Released On: <span className="font-semibold">Sep 27</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Text;
