import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

// configurestore for creating globalstore
export const store = configureStore({
  reducer: {
    counter: CounterSlice
  },
})

// global state of project
// all slices are present here