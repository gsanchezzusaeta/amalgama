import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import mainReducer from './reducers/mainReducer'


const createStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createStorage();

const authPersistConfig = {
    key: "app",
    storage: storage,
    whitelist: ["token","books","user","users"],
};

const persistedReducer = persistReducer(authPersistConfig, mainReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store);

setupListeners(store.dispatch)