import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : null,
    reducers : {
        addMovies : (state,action) => {
            return action.payload;
        }
    }
})

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;