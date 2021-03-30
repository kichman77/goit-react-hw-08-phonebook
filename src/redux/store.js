import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactReducer, loading } from "./contacts/contactsReducer";
import filter from "./filter/filterReducer";
import { userReducer } from "./user";

const config = { key: "auth", storage, whitelist: ["token"] };
export const store = configureStore({
  reducer: {
    auth: persistReducer(config, userReducer),
    contacts: contactReducer,
    filter,
    loading,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
