import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        account: {},
    },
    reducers: {
        setLoggedInAccount(state, action) {
            state.account = action.payload;
        },
    },
});

export const { setLoggedInAccount } = accountSlice.actions;

export default accountSlice.reducer;
