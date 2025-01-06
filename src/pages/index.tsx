import Text from "@/components/text";
import Upcomming from "@/components/upcomming";
import axios from "axios";
import { useEffect, useState } from "react";

export type MovieData = {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
};

export default function Home() {
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ViYTE1YzhlOTMwNmExNGMxZWQ3ZDUyYTRlNGFhMCIsIm5iZiI6MTczMjYxMjEwNC4xMTAzNDA0LCJzdWIiOiI2NzQ1OGRkMzgwYjQ0YTg5MzdiN2MzNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.f5pYhZOw9kt_ZFyPzWay-D1seZ2dOGJ43W7Mb5-a-A0",
      },
    };

    try {
      const response = await axios.request(options);

      const requiredData: MovieData[] = response.data.results.map(
        (item: any) => ({
          id: item.id,
          title: item.title,
          overview: item.overview,
          vote_average: item.vote_average,
          release_date: item.release_date,
          poster_path: item.poster_path,
        })
      );
      console.log(response.data.results);
      setMovieData(requiredData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  const [id, setId] = useState<number | null>(
    movieData.length > 0 ? movieData[0].id : null
  );
  return (
    <div className="bg-black font-Poppins py-1">
      <>
        <Text data={movieData} id={id} />
        <Upcomming data={movieData} setId={setId} />
      </>
    </div>
  );
}
