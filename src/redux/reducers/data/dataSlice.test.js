import { dataTypes, loadingStatus } from '../../common';
import { dataInitialState } from './dataInitialState';
import reducer, { setFilter, setQuoteID, setStatus } from './dataSlice';
import { getData } from './dataThunks';

describe('Testing reducers and action creators:', () => {
   test('Set status', () => {
      const state = reducer(dataInitialState, setStatus(loadingStatus.IDLE));
      expect(state.status).toBe(loadingStatus.IDLE);
   });
   test('Set filter', () => {
      const state = reducer(dataInitialState, setFilter('id', '5'));
      const expectedValue = ['id', '5'];
      expect(state.filter).toEqual(expectedValue);
   });
   test('Set random quote id', () => {
      const state = reducer(dataInitialState, setQuoteID(5));
      expect(state.quoteID).toBe(5);
   });
});

describe('Testing getData async thunk:', () => {
   test('Loading action', () => {
      const stateCopy = {
         ...dataInitialState,
         status: loadingStatus.IDLE,
      };
      const state = reducer(stateCopy, {
         type: getData.pending,
      });
      expect(state.status).toBe(loadingStatus.LOADING);
   });
   test('Fullfilled action', () => {
      const data = [{ id: '1' }, { id: '2' }, { id: '3' }];
      const state = reducer(dataInitialState, {
         type: getData.fulfilled,
         payload: {
            dataType: dataTypes.CHARACTER,
            data,
         },
      });
      expect(state.data).toEqual(data);
      expect(state.dataType).toBe(dataTypes.CHARACTER);
   });
   test('Rejected action', () => {
      const state = reducer(dataInitialState, {
         type: getData.rejected,
      });
      expect(state.status).toBe(loadingStatus.ERROR);
   });
});
