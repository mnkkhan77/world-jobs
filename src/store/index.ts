import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice';
import userPreferencesReducer from './slices/userPreferencesSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    userPreferences: userPreferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;