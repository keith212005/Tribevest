// THIRD PARTY IMPORTS
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// LOCAL IMPORTS
import { REDUCER_TYPE } from '@constants';
import { saveNetwork } from './networkReducer';
import { isOpenFirstTime } from './isOpenFirstTime';
import { setAppLanguage } from './setAppLanguage';
import { getTheme } from './getThemeData';
import { isLoggedIn } from './isLoggedIn';

const appReducer = combineReducers({
  isOnline: saveNetwork,
  isOpenedFirstTime: isOpenFirstTime,
  language: setAppLanguage,
  theme: getTheme,
  isLoggedIn: isLoggedIn,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === REDUCER_TYPE.RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action as any);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['isLoggedIn'], // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
