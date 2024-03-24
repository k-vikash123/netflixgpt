import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { options } from "../utils/links";


const BrowseTrailer = () => {
    const select = useSelector((store) => store.movies)
    const about = select?.overview;

    const id = select?.id;
    const [playId,setPlayId] = useState(null);

   useEffect(() => {
    fetchTrailer();
   },[])

   const fetchTrailer = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",options);
      const json = await data.json();
      const trailer = json?.results?.filter((vedio) => {
        return vedio.name === "Official Trailer";
  })
      setPlayId(trailer?.[0]?.key);
   }
   

    return <div>
        <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+playId+"?autoplay=1&mute=1"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe> 
        <div className="absolute top-0 pl-6 md:pl-20 md:pt-36 pt-[12rem]">
        <p className="text-white text-2xl font-bold italic my-2">{select?.original_title}</p>
        <p className="text-white w-80 text-lg my-2">{about}</p>
        <div className="flex mt-4">
        <button className="w-28 text-lg h-10 rounded-md bg-red-600 text-white mx-2">Watch Now</button>
        <button className="w-32 h-10 text-lg rounded-md bg-red-600 text-white mx-2"
      >More Info<span className="m-1">&#9432;</span></button>
        </div>
        </div>
    </div> 
}

export default BrowseTrailer;