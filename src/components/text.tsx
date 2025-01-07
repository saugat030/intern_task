import SearchBar from "./searchbar";
import { MovieData } from "@/pages";

export type TextProps = {
  data: MovieData[];
  id: number | null;
  setId: (id: number) => void;
};

const Text = ({ data, id, setId }: TextProps) => {
  const foundObj: MovieData | undefined = data.find((item) => item.id == id);
  return (
    <div className="relative mx-auto h-[768px] w-full xl:h-[528px] 2xl:h-[852px] xl:w-[1248px] 2xl:w-[1504px]">
      <img
        src={`https://image.tmdb.org/t/p/original/${foundObj?.backdrop_path}`}
        alt=""
        className="absolute h-full w-full brightness-[0.6] rounded-lg object-cover"
      />
      <SearchBar setId={setId} />
      <div className="absolute md:gap-6 gap-2 flex flex-col text-white p-3 bottom-32 min-w-[550px]">
        <h1 className="font-bold md:text-6xl text-3xl">{foundObj?.title}</h1>
        <p className="md:text-xl  md:w-[550px] text-base h-[93px] ps-2 font-medium line-clamp-3">
          {foundObj?.overview}
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

export default Text;
