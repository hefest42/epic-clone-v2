import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        isAccountLoggedIn: false,
        account: {},
    },
    reducers: {
        setLoggedInAccount(state, action) {
            console.log("hello");

            const wishlist = action.payload.hasOwnProperty("wishlist") ? action.payload.wishlist : [];

            state.isAccountLoggedIn = true;

            state.account = { ...action.payload, wishlist: wishlist };
        },
        addGameToWishlist(state, action) {
            if (!state.isAccountLoggedIn) return;

            if (!state.account.wishlist) state.account.wishlist = [];

            state.account.wishlist.push(action.payload);
        },
        removeGameFromWishlist(state, action) {
            if (!state.isAccountLoggedIn) return;

            state.account.wishlist = state.account.wishlist.filter((game) => game.name !== action.payload.name);
        },
        logOutAccount(state, action) {
            state.isAccountLoggedIn = false;
            state.account = {};
        },
    },
});

export const { setLoggedInAccount, addGameToWishlist, removeGameFromWishlist, logOutAccount } = accountSlice.actions;

export default accountSlice.reducer;
