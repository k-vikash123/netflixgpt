import { createSlice } from "@reduxjs/toolkit";


const searchedMovieSlice = createSlice({
    name : "searchMovie",
    initialState : null,
    reducers : {
        addSearch : (state,action) => {
            return action.payload;
        }
    }
})

export const { addSearch } = searchedMovieSlice.actions;
export default searchedMovieSlice.reducer;