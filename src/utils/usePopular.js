
import { useEffect, useState } from "react";
import { popular, options } from "./links";

const usePopular = () => {
  
    const [movieList,setMovieList] = useState([]); 

    useEffect(() => {
        fetchNowplaying();
    },[])

    const fetchNowplaying = async() =>{
        const data = await fetch(popular,options);
        const json = await data.json();
        setMovieList(json?.results);
    }

    return movieList;
}

export default usePopular;