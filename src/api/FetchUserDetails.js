import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchUserDetails = createAsyncThunk('Fetch/userDetails', async (userName) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userDetails = await response.json();
        return userDetails
    } catch (error) {
        console.log(error.message)
    }
})