
import { useEffect, useState } from "react";
import { upcoming, options } from "./links";

const useUpcoming = () => {
  
    const [movieList,setMovieList] = useState([]); 

    useEffect(() => {
        fetchNowplaying();
    },[])

    const fetchNowplaying = async() =>{
        const data = await fetch(upcoming,options);
        const json = await data.json();
        setMovieList(json?.results);
    }

    return movieList;
}

export default useUpcoming;