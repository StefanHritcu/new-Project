

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        bananaQuantity: 0,
        eggPlant: 0,
        papayaQ: 0,
        dragonQ: 0,
        carotQ: 0,
        avocadoQ: 0,
        priceBanana: 0,
        priceCarot: 0,
        priceEggplant: 0,
        priceDragon: 0,
        priceAvocado: 0,
        pricePapaya: 0,
        totalPrice: 0,
        logged: false,

        personalBalance: 0,
    },
    
    reducers: {
        resetCarrello: (state) => {
            state.bananaQuantity = 0;
            state.eggPlant = 0;
            state.papayaQ = 0;
            state.dragonQ = 0;
            state.carotQ = 0;
            state.avocadoQ = 0;
        },
        setPersonalBalance: (state, action) => {
            state.personalBalance += action.payload;
        },
        setLogged: (state) => {
            state.logged = "";
        },
        setTotalPrice: (state, action) => {
            state.value += action.payload;
        },
        resetTotalPrice: (state) => {
            state.totalPrice = 0;
        },
        addToCart: (state, action) => {
            state.value += action.payload;
        },
        resetCart: (state) => {
            state.value = 0;
        },
        setBananaQuantity: (state, action) => {
            state.bananaQuantity = action.payload;
            state.priceBanana += action.payload * 0.69;
            state.totalPrice += action.payload * 0.69;
        },
        setEggPlant: (state, action) => {
            state.eggPlant = action.payload;
            state.priceEggplant += action.payload * 3.89;
            state.totalPrice += action.payload * 3.89;
        },
        setPapayaQ: (state, action) => {
            state.papayaQ = action.payload;
            state.pricePapaya += action.payload * 5.99;
            state.totalPrice += action.payload * 5.99;
        },
        setDragoQ: (state, action) => {
            state.dragonQ = action.payload;
            state.priceDragon += action.payload * 8.39;
            state.totalPrice += action.payload *8.39;
        },
        setCarotQ: (state, action) => {
            state.carotQ = action.payload;
            state.priceCarot += action.payload * 1.99;
            state.totalPrice += action.payload * 1.99;
        },
        setAvocadoQ: (state, action) => {
            state.avocadoQ = action.payload;
            state.priceAvocado += action.payload * 1.29;
            state.totalPrice += action.payload * 1.29;
        },
    },
});

export const { addToCart, setPersonalBalance, setLogged, resetCarrello, setSvuotaCart, resetCart, resetTotalPrice, setTotalPrice, setBananaQuantity, setEggPlant, setPapayaQ, setDragoQ, setCarotQ, setAvocadoQ} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
