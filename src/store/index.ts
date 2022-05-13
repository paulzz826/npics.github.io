import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./app";
import wsSlice from "./ws";


const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        ws: wsSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export default store;