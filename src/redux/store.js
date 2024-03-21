import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import initialReducer from "./Functions/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
const persistConfig = {
  key: "Freelanceri-ks",
  storage,
};

const rootReducer = combineReducers({ data: initialReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: composeWithDevTools(),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false,
//       immutableCheck: true,
//       // serializableCheck: {
//       //   ignoredActions: ['persist/PERSIST'],
//       // },
//       serializableCheck: false,
//     }),
//     devTools: process.env.NODE_ENV !== 'production'
// });

// const rootReducer = combineReducers({data: initialReducer})

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools()
);

export const persisted = persistStore(store);
