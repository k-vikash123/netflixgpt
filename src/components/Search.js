import { useEffect, useRef } from "react";
import { bgImage, options } from "../utils/links";
import DisplaySearchResult from "./DisplaySearchResult";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../utils/searchedMovieSlice";
import lang from "../utils/constants";


const Search = () => {
    const movieName = useRef();
    const dispatch = useDispatch();
    const select = useSelector((store) => store.searchMovie);
    const language = useSelector((store) => store.configLan.lang);

    useEffect(() => {
        searchMovie();
    },[])
      
    const searchMovie = async() => {
        const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName?.current?.value+"&include_adult=false&language=en-US&page=1",options);
        const json = await data.json();
        const selMov = json?.results;
        const filteredFilm = selMov?.filter((film) => {
            return film.title === movieName?.current?.value;
        })
        dispatch(addSearch(filteredFilm))
    }

    return <div className="overflow-y-scroll">
         <img src={bgImage} alt="background" className="md:fixed md:w-screen fixed h-screen object-cover -z-10"></img>
         <div className="absolute top-[26%] mx-auto  left-4 md:left-[24%] grid grid-cols-12 rounded-md bg-black">
            <input type="text" ref={movieName} placeholder={lang[language].searchPlace} className="m-3  md:w-[29rem] w-[16rem] h-10 px-2 rounded-md outline-none col-span-9"></input>
            <button className="m-3 text-lg bg-red-600 text-white rounded-md col-span-3" onClick={searchMovie}>{lang[language].search}</button>
         </div>
         {select?.length && <div className="absolute top-[40%] md:left-[24%] md:w-6/12 h-6/12 p-3 rounded-md bg-black m-4 mx-auto">
           {select?.map((film) => {
              return  <DisplaySearchResult key={film?.id} fData={film}/>
           })}
         </div>
        }
    </div>
}

export default Search;