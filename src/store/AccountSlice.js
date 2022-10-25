import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        isAccountLoggedIn: false,
        account: {},
    },
    reducers: {
        setLoggedInAccount(state, action) {
            state.account = action.payload;
            state.isAccountLoggedIn = true;
        },
        addGameToWishlist(state, action) {
            state.account.wishlist.push(action.payload);
        },
    },
});

export const { setLoggedInAccount, addGameToWishlist } = accountSlice.actions;

export default accountSlice.reducer;
