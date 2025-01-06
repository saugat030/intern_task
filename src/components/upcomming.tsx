import React, { Dispatch, SetStateAction } from "react";
import Marquee from "react-fast-marquee";
import { MovieData } from "@/pages";
type UpcommingProps = {
  setId: Dispatch<SetStateAction<number | null>>;
  data: MovieData[];
};
const Upcomming = ({ data, setId }: UpcommingProps) => {
  return (
    <div className="mt-5 mb-20 text-white w-[1504px] mx-auto flex flex-col gap-2">
      <h1 className="font-bold text-2xl mb-6">Upcomming Movies</h1>
      <div className="relative p-1 w-full cursor-pointer after:content-[''] after:absolute after:top-0 after:left-0 after:w-12 after:h-full after:bg-gradient-to-r after:from-black after:to-transparent after:z-10 before:content-[''] before:absolute before:top-0 before:right-0 before:w-12 before:h-full before:bg-gradient-to-l before:from-black before:to-transparent before:z-10">
        <Marquee loop={0} pauseOnHover={true} speed={100}>
          {data.map((item) => (
            <img
              src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
              alt="Photo"
              className="inline mx-1 rounded-xl"
              onClick={() => {
                setId(item.id);
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Upcomming;
