import { moviePoster } from "../utils/links";

const DisplaySearchResult = ({fData}) => {
    const {poster_path,overview,title,release_date} = fData;

   return  fData.poster_path ? 
    <div className="flex my-4">
        <div className="mx-2">
            <img src={moviePoster+poster_path} alt="moviePoster" className="object-contain"></img>
        </div>
        <div className="text-white mx-2">
            <p className="font-bold italic text-2xl text-red-300">{title}</p>
            <p className="text-blue-300 mb-2">Language : English</p>
            <p>{overview}</p>
            {release_date && <p className="my-2"><span className="text-green-300 text-lg">Release Date : </span>{release_date}</p>}
        </div>
    </div> : null;
}

export default DisplaySearchResult;