
import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,    
    },
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload) //inserisco nello state tutto l'oggetto prodotto
            state.quantity += 1
            state.total += action.payload.price * action.payload.quantity 
        },
        reset: (state) =>{
            state.products = [] //inserisco nello state tutto l'oggetto prodotto
            state.quantity = 0
            state.total  = 0
        }

    }
})

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer; 