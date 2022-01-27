import { createSlice } from '@reduxjs/toolkit';
import { appInitialState } from './appInitialState';

const appSlice = createSlice({
   name: 'app',
   initialState: appInitialState,
   reducers: {
      toggleMenuStatus(state, action) {
         state.menuStatus = !state.menuStatus;
      },
      setImageCashed(state, action) {
         const imgURL = action.payload;
         state.cashedImages.push(imgURL);
      },
   },
});

export const { toggleMenuStatus, setImageCashed } = appSlice.actions;
export default appSlice.reducer;
