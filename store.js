import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from 'react-native-encrypted-storage';
import authReducer from './slices/authSlice';
import contactReducer from './slices/contactSlice';
import vacationSlice from './slices/vacationSlice'; 
import commonDataSlice from './slices/commonDataSlice'; 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'contact', 'vacation', 'commonData'], // only auth will be persisted
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contact: contactReducer,
    vacation: vacationSlice.reducer,
    commonData: commonDataSlice,

    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);