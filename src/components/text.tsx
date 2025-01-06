import SearchBar from "./searchbar";
import { MovieData } from "@/pages";

export type TextProps = {
  data: MovieData[];
  id: number | null;
};

const Text = ({ data, id }: TextProps) => {
  const foundObj: MovieData | undefined = data.find((item) => item.id == id);
  return (
    <div className="relative mx-auto h-[852px] w-[1504px] p-1">
      <img
        src={`https://image.tmdb.org/t/p/original/${foundObj?.backdrop_path}`}
        alt=""
        className="absolute h-full w-full brightness-[0.6] rounded-lg object-cover"
      />
      <SearchBar />
      <div className="absolute gap-6 flex flex-col text-white p-3 bottom-32 w-[550px]">
        <h1 className="font-bold text-6xl">{foundObj?.title}</h1>
        <p className="text-xl h-[93px] ps-2 font-medium line-clamp-3">
          {foundObj?.overview}
        </p>
        <div className="flex gap-2 font-extrabold text-lg">
          <h2 className="rounded-full px-4 py-1 bg-yellow-400 text-black">
            IMDB: <span className="font-semibold">6.0</span>
          </h2>
          <h2 className="rounded-full px-4 py-1 bg-white text-black">
            Released On: <span className="font-bold">Sep 27</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Text;
