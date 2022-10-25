import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice";

const store = configureStore({
    reducer: {
        account: AccountSlice,
    },
});

export default store;
