import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchedMovieSlice";
import langReducer from "./langSlice";

const appStore = configureStore({
    reducer : {
       user : userReducer,
       movies : movieReducer,
       searchMovie : searchReducer,
       configLan : langReducer,
    }
})

export default appStore;