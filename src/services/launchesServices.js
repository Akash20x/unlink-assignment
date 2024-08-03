import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API =  'https://api.spacexdata.com/v3'

export const fetchPastLaunch = createAsyncThunk(
    "launches/fetchPastLaunch",
    async () => {
        const response = await axios.get(`${BASE_API}/launches/past`);
        return response.data;
    },
);

export const fetchUpcomingLaunch = createAsyncThunk(
  "launches/fetchUpcomingLaunch",
  async () => {
      const response = await axios.get(`${BASE_API}/launches/upcoming`);
      return response.data;
  },
);
