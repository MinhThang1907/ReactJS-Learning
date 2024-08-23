import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HomeReducer from "../slice/homeSlice";
import SocialReducer from "../slice/socialSlice";

const reducer = combineReducers({
    counter: HomeReducer,
    social: SocialReducer,
})

export const store = configureStore({
  reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch