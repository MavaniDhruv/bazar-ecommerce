import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart_data:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addproduct: (state,action) => {
      state.cart_data.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addproduct} = counterSlice.actions

export default counterSlice.reducer