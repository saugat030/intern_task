import React, { Dispatch, SetStateAction } from "react";
import { MovieData } from "@/pages";
type UpcommingProps = {
  setId: Dispatch<SetStateAction<number | null>>;
  data: MovieData[];
};
const Upcomming = ({ data, setId }: UpcommingProps) => {
  return (
    <div className="mt-5 mb-20 text-white w-[1504px] mx-auto flex flex-col gap-2">
      <h1 className="font-bold text-2xl mb-6">Upcomming Movies</h1>
      <div className="flex gap-2 overflow-hidden">
        {data.map((item) => (
          <figure
            onClick={() => {
              setId(item.id);
            }}
            className="h-[230px] bg-rose-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
              alt="Photo"
              className="h-full min-w-full"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Upcomming;
