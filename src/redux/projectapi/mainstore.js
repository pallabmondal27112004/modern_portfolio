import { configureStore } from "@reduxjs/toolkit";


import projectSlice from "./projectSlice";
import userSlice from './adminSlice'
const store =configureStore({

    reducer:{
        project:projectSlice,
        admin:userSlice
    }
})
export default store;