import { createSlice } from "@reduxjs/toolkit";
import { fetchPastLaunch, fetchUpcomingLaunch } from "../services/launchesServices";

const initialState = {
    pastLaunches: [],
    upcomingLaunches: [],
    launchesLoading: false,
    launchesError: null,
  };


const launchesSlice = createSlice({
    name: "launches",
    initialState,
    extraReducers: (builder) => {

        builder.addCase(fetchPastLaunch.pending, (state) => {
            state.launchesLoading = true;
            state.launchesError = null;
        });
        builder.addCase(fetchPastLaunch.fulfilled, (state, action) => {
            state.pastLaunches = action.payload;
            state.launchesLoading = false;
        })
        builder.addCase(fetchPastLaunch.rejected, (state, action) => {
            state.launchesLoading = false;
            state.launchesError = action.error.message; 
        });
        builder.addCase(fetchUpcomingLaunch.pending, (state) => {
            state.launchesLoading = true;
            state.launchesError = null;
        });
        builder.addCase(fetchUpcomingLaunch.fulfilled, (state, action) => {
            state.upcomingLaunches = action.payload;
            state.launchesLoading = false;
        })
        builder.addCase(fetchUpcomingLaunch.rejected, (state, action) => {
            state.launchesLoading = false;
            state.launchesError = action.error.message; 
        });

    }
})

export default launchesSlice.reducer;  