
export const bgImage = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  };

export const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const moviePoster = "https://image.tmdb.org/t/p/original/";

export const trailerLink = "https://api.themoviedb.org/3/movie/{}/videos?language=en-US";

export const popular = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const topRated = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const upcoming = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const searchedMovie = "https://api.themoviedb.org/3/search/movie?query=John%20Wick&include_adult=false&language=en-US&page=1";

export const supportedLang = [
  { identifier : "en" , name : "English"},
  { identifier : "hindi" , name : "हिंदी"},
]