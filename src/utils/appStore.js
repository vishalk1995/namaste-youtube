import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';

const appStore = configureStore({
  reducer: {
    // Add reducers here
    global: globalSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
