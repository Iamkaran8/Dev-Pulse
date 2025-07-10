import { createSlice } from "@reduxjs/toolkit";
import { FetchUserDetails } from "../../api/FetchUserDetails";


const initialState = {
    GitUserDetails: [],
    loading: false,
    error: ""
}
export const GithubDetailsSlice = createSlice({
    name: 'githubDetails',
    initialState,
    reducers: {

    }, extraReducers: (builder) => {
        builder
            .addCase(FetchUserDetails.pending, (state, action) => {
                state.loading = true;
            })
        builder.addCase(FetchUserDetails.fulfilled, (state, action) => {
            state.GitUserDetails = action.payload;
            state.loading = false;
        })
        builder.addCase(FetchUserDetails.rejected, (state, action) => {
            state.loading = false;
            console.log("spmethi")
            state.error = "Something went wrong!";
        })
    }
})



export const { } = GithubDetailsSlice.actions;
export default GithubDetailsSlice.reducer