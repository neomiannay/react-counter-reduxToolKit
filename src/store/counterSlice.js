import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterMiddleware from './middleware/counterMiddleware';
/**
 * Regroupe (synthèse) de REDUX, ce que l'on fait habituellement est agrégé dans createSlice
 */
const counter = createSlice({
    name: 'counter',
    initialState: { count: 0, prime: false },
    reducers: {
        increment: (state) => {
            state.count += Math.floor(Math.random() * 10) + 1;
        },
        prime: (state, action) => {
            state.prime = action.payload;
            console.log(state.prime);
        }
    }
});

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
    },
    middleware: [counterMiddleware],
});

export const { increment, prime } = counter.actions;
