import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name : "configLan",
    initialState : {
        lang : "en",
    },
    reducers : {
        changeLan : (state,action) => {
            state.lang = action.payload
        }
    }
})

export const { changeLan } = langSlice.actions;
export default langSlice.reducer;