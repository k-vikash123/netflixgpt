
import { useEffect, useState } from "react";
import { topRated, options } from "./links";

const useTopRated = () => {
  
    const [movieList,setMovieList] = useState([]); 

    useEffect(() => {
        fetchNowplaying();
    },[])

    const fetchNowplaying = async() =>{
        const data = await fetch(topRated,options);
        const json = await data.json();
        setMovieList(json?.results);
    }

    return movieList;
}

export default useTopRated;