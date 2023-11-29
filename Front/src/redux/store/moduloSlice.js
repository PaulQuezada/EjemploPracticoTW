import { createSlice } from '@reduxjs/toolkit'

export const moduloSlice = createSlice({
    name: 'modulo',
    initialState: {
        value: {}
    },
    reducers: {

        cambiarValorModulo: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {cambiarValorModulo} = moduloSlice.actions 

export default moduloSlice.reducer