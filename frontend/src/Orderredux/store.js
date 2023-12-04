// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../Orderredux/featuers/auth/authSlice.js"


export const  store = configureStore({
    reducer:{
        auth:authReducer,
    },
})