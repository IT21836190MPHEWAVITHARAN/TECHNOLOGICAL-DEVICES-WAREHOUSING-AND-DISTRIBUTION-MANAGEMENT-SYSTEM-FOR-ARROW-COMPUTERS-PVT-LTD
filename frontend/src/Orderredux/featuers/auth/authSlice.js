import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isloggedIn:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        
    },
});

export const {setCredintials, logout} = authSlice.actions;

export default authSlice.reducer;