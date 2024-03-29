// store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if necessary
  },
})

export default store
