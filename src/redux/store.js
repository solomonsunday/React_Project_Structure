//This version keeps in local storage, and doesn't update
// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from "./reducers/rootReducer";


// const persistConfig = {
//   key: 'woozeee',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// const initialState = {}


// export const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
// export const persistor = persistStore(store)






//This version almost doesn't do anything
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";


const users = JSON.parse(localStorage.getItem("user"));
const initialState = { users };
const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);

