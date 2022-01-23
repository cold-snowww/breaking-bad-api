import { createSlice } from '@reduxjs/toolkit';
import { appInitialState } from './appInitialState';

const appSlice = createSlice({
   name: 'app',
   initialState: appInitialState,
   reducers: {
      toggleMenuStatus(state, action) {
         state.menuStatus = !state.menuStatus;
      },
   },
});

export const { toggleMenuStatus } = appSlice.actions;
export default appSlice.reducer;
