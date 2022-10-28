import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addGameToCart(state, action) {
            state.cart.push(action.payload);
        },

        removeGameFromCart(state, action) {
            state.cart = state.cart.filter((game) => game.name !== action.payload.name);
        },
    },
});

export const { addGameToCart, removeGameFromCart } = CartSlice.actions;

export default CartSlice.reducer;
