import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API =  'https://api.spacexdata.com/v3'

export const fetchAllRockets = createAsyncThunk(
    "rockets/fetchAllRockets",
    async () => {
        const response = await axios.get(`${BASE_API}/rockets`);
        return response.data;
    },
);
