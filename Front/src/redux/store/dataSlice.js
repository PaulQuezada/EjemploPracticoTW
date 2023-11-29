import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        value: 0
    },
    reducers: {

        cambiarValor: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {cambiarValor} = dataSlice.actions 

export default dataSlice.reducer