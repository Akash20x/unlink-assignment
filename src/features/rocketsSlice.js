import { createSlice } from "@reduxjs/toolkit";
import { fetchAllRockets } from "../services/rocketsServices";

const initialState = {
    rockets: [],
    rocketsLoading: false,
    rocketsError: null,
  };


const rocketsSlice = createSlice({
    name: "rockets",
    initialState,
    extraReducers: (builder) => {

        builder.addCase(fetchAllRockets.pending, (state) => {
            state.rocketsLoading = true;
            state.rocketsError = null;
        });
        builder.addCase(fetchAllRockets.fulfilled, (state, action) => {
            state.rockets = action.payload;
            state.rocketsLoading = false;
        })
        builder.addCase(fetchAllRockets.rejected, (state, action) => {
            state.rocketsLoading = false;
            state.rocketsError = action.error.message; 
        });

    }
})

export default rocketsSlice.reducer;  