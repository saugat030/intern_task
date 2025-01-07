import { Movie, MovieData } from "@/pages";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
type SearchBarProps = {
  setId: (id: number) => void;
};
const SearchBar = ({ setId }: SearchBarProps) => {
  const [value, setValue] = useState<string>("");
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const fetchData = async () => {
    console.log("APII FUNCTION CHLADAI!!!!!");
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${value}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };
    try {
      const response = await axios.request(options);

      const requiredData: MovieData[] = response.data.results.map(
        (item: Movie) => ({
          id: item.id,
          title: item.title,
          overview: item.overview,
          vote_average: item.vote_average,
          release_date: item.release_date,
          poster_path: item.poster_path,
          backdrop_path: item.backdrop_path,
        })
      );
      console.log(response.data.results);
      setMovieData(requiredData);
      console.log(2);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <>
      <div
        className="hover:scale-105 transform duration-200 absolute flex left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 items-center mt-4 bg-gray-600/10 backdrop-blur-sm py-1 px-4 rounded-full w-[350px] h-[53px] mx-auto border-2 border-white
       "
      >
        <button className=" text-white rounded-full">
          <IoSearch size={24} />
        </button>
        <input
          type="text"
          placeholder="Search Movies/Show..."
          className="flex-1 bg-transparent text-white placeholder:text-base placeholder-white outline-none p-2"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      {movieData.length > 0 && (
        <ul className="absolute top-[75px] rounded-md left-1/2 -translate-x-1/2 text-white bg-black p-2 w-[350px] z-40">
          {movieData.slice(0, 10).map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setId(item.id);
              }}
              className="flex gap-2 items-center w-full my-1 cursor-pointer p-1 bg-black hover:bg-slate-800"
            >
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
                  alt="Photo"
                  className="h-[40px] aspect-square"
                />
              </figure>

              <h2 className="flex-1 truncate">{item.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
