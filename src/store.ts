import { configureStore } from "@reduxjs/toolkit";
import productApi from "./services/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import productSlice from "./features/productSlice";


const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware)
    }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;