import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 1,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    next: (state) => {
      state.value += 1
    },
    previous: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const { next, previous, reset } = counterSlice.actions

export default counterSlice.reducer
