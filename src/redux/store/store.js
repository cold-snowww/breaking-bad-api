import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducers/data/dataSlice';
import appReducer from '../reducers/app/appSlice';

const store = configureStore({
   reducer: {
      data: dataReducer,
      app: appReducer,
   },
});

export default store;
