
import Movies from "./Movies";
import useNowPlaying from "../utils/useNowPlaying";
import useUpcoming from "../utils/useUpcoming";
import useTopRated from "../utils/useTopRated";
import usePopular from "../utils/usePopular";

const Recommends = () => {
    const movieList = useNowPlaying();
    const upcoming = useUpcoming();
    const topRated = useTopRated();
    const popular = usePopular();

     return movieList?.length === 0 ? null : (
        <div className="bg-black">
    <div className="relative mt-72 md:-mt-28">
       <h1 className="font-bold text-lg m-2 text-white">Now Playing</h1>
       <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
       {movieList?.map((movie) => {
        return <Movies key={movie?.id} film={movie}/>
       })}
       </div>
    </div>
    <div>
       <h1 className="font-bold text-lg m-2 text-white">Upcoming</h1>
       <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
       {upcoming?.map((movie) => {
        return <Movies key={movie?.id} film={movie}/>
       })}
       </div>
    </div>
    <div>
       <h1 className="font-bold text-lg m-2 text-white">Popular</h1>
       <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
       {popular?.map((movie) => {
        return <Movies key={movie?.id} film={movie}/>
       })}
       </div>
    </div>
    <div>
       <h1 className="font-bold text-lg m-2 text-white">Top Rated</h1>
       <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
       {topRated?.map((movie) => {
        return <Movies key={movie?.id} film={movie}/>
       })}
       </div>
    </div>
    </div>
     )
}

export default Recommends;