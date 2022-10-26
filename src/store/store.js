import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        account: AccountSlice,
        cart: CartSlice,
    },
});

export default store;
