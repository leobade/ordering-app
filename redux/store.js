import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlicer";

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})