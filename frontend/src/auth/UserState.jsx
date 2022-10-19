import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({

    name: "user",
    initialState: {
        user: {
        },
        isLoggedIn: false
    },
    reducers: {
        setUser: (state, action)=> {
            state.user = {...action.payload}
            state.isLoggedIn = true
        },
        logout: (state) => {
            localStorage.clear()
            state.user = {}
            state.isLoggedIn = false
        }
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer