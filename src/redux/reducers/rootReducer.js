import { combineReducers}from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import messages from './messages';
import users from './users';
import shopReducer from './shopping';
import contactReducer from './contact';
import filterReducer from "./filters"

const persistConfig = {
  key: 'woozadmin',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth,
  messages,
  users,
  shop: shopReducer,
  contact: contactReducer,
  filters: filterReducer,
});

export default persistReducer(persistConfig, rootReducer)

