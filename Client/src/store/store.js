// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import visitorSubmitReducer from './VisitorSubmitSlice';

const store = configureStore({
  reducer: {
    visitorSubmit: visitorSubmitReducer,
  },
  // middleware is already added by default, but this is an explicit setup
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
