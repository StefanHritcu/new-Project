import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterSlice";
import { usersDataReduce } from "./UsersData";


export default configureStore({
    reducer: {
        counter: counterReducer,
        usersdata: usersDataReduce,
    }
})