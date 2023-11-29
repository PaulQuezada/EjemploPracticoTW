import { configureStore } from '@reduxjs/toolkit'

import dataReducer from "./dataSlice"
import moduloSlice from './moduloSlice'

export default configureStore({
  
  reducer: {
    data: dataReducer,
    modulo: moduloSlice
  }
})