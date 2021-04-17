import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todo/reducer';
import userReducer from './user/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
