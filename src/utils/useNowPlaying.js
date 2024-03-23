import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { nowPlaying, options } from "./links";
import { addMovies } from "./movieSlice";

const useNowPlaying = () => {
    
    const [movieList,setMovieList] = useState([]); 
    const dispatch = useDispatch();

    useEffect(() => {
        fetchNowplaying();
    },[])

    const fetchNowplaying = async() =>{
        const data = await fetch(nowPlaying,options);
        const json = await data.json();
        setMovieList(json?.results);
        dispatch(addMovies(json?.results?.[0]));
    }

    return movieList;
}

export default useNowPlaying;