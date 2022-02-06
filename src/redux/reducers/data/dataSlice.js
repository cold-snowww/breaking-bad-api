import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../common';
import { dataInitialState } from './dataInitialState';
import { getData } from './dataThunks';

const dataSlice = createSlice({
   name: 'data',
   initialState: dataInitialState,
   reducers: {
      // Change app status, loading, error, idle
      setStatus(state, action) {
         const newStatus = action.payload;
         state.status = newStatus;
      },
      // Set current filter for data rendering
      setFilter: {
         prepare(key, value) {
            return { payload: { key, value } };
         },
         reducer(state, action) {
            const { key, value } = action.payload;
            state.filter = [key, value];
         },
      },
      setQuoteID(state, action) {
         const newQuoteID = action.payload;
         state.quoteID = newQuoteID;
      },
   },
   extraReducers: (builder) => {
      // Fetch data from server or SessionStorage
      builder.addCase(getData.pending, (state, action) => {
         const newDataType = action.meta.arg;
         state.dataType = newDataType;
         state.status = loadingStatus.LOADING;
      });
      builder.addCase(getData.fulfilled, (state, action) => {
         const data = action.payload;
         state.status = loadingStatus.IDLE;
         state.data = data;
      });
      builder.addCase(getData.rejected, (state) => {
         state.status = loadingStatus.ERROR;
         state.dataType = null;
      });
   },
});

export const { setStatus, setFilter, setQuoteID } = dataSlice.actions;
export default dataSlice.reducer;
