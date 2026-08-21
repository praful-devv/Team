import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../app/features/auth/state/auth/authSlice'

export const store = configureStore({
    reducer:{
        auth:authSlice
    }
})