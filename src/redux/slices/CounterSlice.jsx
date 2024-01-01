import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}
// createSlice for creating different portions

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = CounterSlice.actions;
// exporting functions from action creator
export default CounterSlice.reducer;
// export reducer