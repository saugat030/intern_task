import Text from "@/components/text";
import Upcomming from "@/components/upcomming";
import axios from "axios";
import { useEffect, useState } from "react";
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieData = {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
};

export default function Home() {
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const [id, setId] = useState<number | null>(null);
  const fetchMovies = async () => {
    console.log("APII FUNCTION CHLADAI!!!!!");
    // console.log(process.env.NEXT_PUBLIC_API_TOKEN);
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
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
      console.log(2);
      setMovieData(requiredData);
      if (requiredData.length > 0) {
        setId(requiredData[Math.floor(Math.random() * requiredData.length)].id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  if (!movieData.length) {
    return (
      <div className="h-screen flex justify-center items-center text-8xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black font-Poppins pb-0.5 overflow-x-hidden">
      <>
        <Text setId={setId} data={movieData} id={id} />
        <Upcomming data={movieData} setId={setId} />
      </>
    </div>
  );
}
