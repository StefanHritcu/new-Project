import { createSlice } from "@reduxjs/toolkit";

export const usersData = createSlice({
    name: "usersdata",
    initialState: {
        userName: "",
        userSurname: "",
        email: "",
        streetAddress: "",
        city: "",
        country: "",
    },

    reducers: {
        setUserEmail: (state, action) => {
            state.email = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setUserSurname: (state, action) => {
            state.userSurname = action.payload;
        },
        setStreetAddress: (state, action) => {
            state.streetAddress = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        }
    }
})

export const { setUserName, setUserEmail, setUserSurname, setStreetAddress, setCity, setCountry } = usersData.actions;
export const usersDataReduce = usersData.reducer;