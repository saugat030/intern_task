import { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import { MovieData } from "@/pages";
import axios from "axios";

export type LandingProps = {
  id: number;
  setId: (id: number) => void;
};

const Landing = ({ id, setId }: LandingProps) => {
  const [movieData, setMovieData] = useState<MovieData | undefined>(undefined);
  const fetchMovies = async () => {
    console.log("APII FUNCTION of text Props CHLADAI!!!!!");

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    try {
      const response = await axios.request(options);

      console.log(response.data);

      const requiredData: MovieData = response.data;

      setMovieData(requiredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [id]);

  return (
    <div className="relative mx-auto h-[768px] w-full xl:h-[528px] 2xl:h-[852px] xl:w-[1248px] 2xl:w-[1504px]">
      <img
        src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`}
        alt=""
        className="absolute h-full w-full brightness-[0.6] rounded-lg object-cover"
      />
      <SearchBar setId={setId} />
      <div className="absolute md:gap-6 gap-2 flex flex-col text-white p-3 bottom-32 min-w-[550px]">
        <h1 className="font-bold md:text-6xl text-3xl">{movieData?.title}</h1>
        <p className="md:text-xl  md:w-[550px] text-base h-[93px] ps-2 font-medium line-clamp-3">
          {movieData?.overview}
        </p>
        <div className="flex md:flex-row flex-col items-start gap-3  font-extrabold text-lg">
          <h2 className="rounded-full text-sm md:text-base px-4 py-1 bg-yellow-400 text-black">
            IMDB: <span className="font-semibold">6.0</span>
          </h2>
          <h2 className="rounded-full text-sm md:text-base px-4 py-1 bg-white text-black">
            Released On: <span className="font-bold">Sep 27</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
