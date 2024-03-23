import { moviePoster } from "../utils/links";

const Movies = ({film}) => {
     const {poster_path} = film;

    return  <div className="w-44 h-44 flex-grow-0 flex-shrink-0 mx-2 rounded-md">
        <img src={moviePoster+poster_path} alt="moviePoster" className="w-44 h-44"></img>
    </div>
}

export default Movies;