import { configureStore } from "@reduxjs/toolkit";
import  GithubDetailsSlice  from "./slices/GithubDetailsSlice";

export const Store = configureStore({
    reducer: {
        Github : GithubDetailsSlice
    }
})