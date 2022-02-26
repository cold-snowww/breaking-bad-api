import { dataTypes, loadingStatus } from '../../common';
import { dataInitialState } from './dataInitialState';
import reducer, {
   setFilter,
   setQuoteID,
   setStatus,
   clearFilter,
} from './dataSlice';
import { getData } from './dataThunks';

describe('Testing action creators:', () => {
   test('Create setStatus action object', () => {
      const expectedValue = {
         type: 'data/setStatus',
         payload: loadingStatus.LOADING,
      };
      expect(setStatus(loadingStatus.LOADING)).toEqual(expectedValue);
   });
   test('Create setFilter action object', () => {
      const expectedValue = {
         type: 'data/setFilter',
         payload: {
            key: 'name',
            value: 'Walter',
         },
      };
      expect(setFilter('name', 'Walter')).toEqual(expectedValue);
   });
   test('Create setQuoteID action object', () => {
      const expectedValue = {
         type: 'data/setQuoteID',
         payload: 5,
      };
      expect(setQuoteID(5)).toEqual(expectedValue);
   });
   test('Create clearFilter action object', () => {
      const expectedValue = {
         type: 'data/clearFilter',
      };
      expect(clearFilter()).toEqual(expectedValue);
   });
});

describe('Testing reducer:', () => {
   test('Set status', () => {
      const initialState = {
         ...dataInitialState,
      };
      const state = reducer(initialState, setStatus(loadingStatus.IDLE));
      expect(state.status).toBe(loadingStatus.IDLE);
   });
   test('Set filter', () => {
      const initialState = {
         ...dataInitialState,
         filter: [],
      };
      const state = reducer(initialState, setFilter('name', 'Walter'));
      expect(state.filter).toEqual(['name', 'Walter']);
   });
   test('Set random quote id', () => {
      const initialState = {
         ...dataInitialState,
      };
      const state = reducer(initialState, setQuoteID(5));
      expect(state.quoteID).toBe(5);
   });
   test('Clear filter', () => {
      const initialState = {
         ...dataInitialState,
         filter: ['name', 'Walter'],
      };
      const state = reducer(initialState, clearFilter());
      expect(state.filter).toEqual([]);
   });
});

describe('Testing getData async thunk:', () => {
   test('Loading action', () => {
      const initialState = {
         ...dataInitialState,
         status: loadingStatus.IDLE,
      };
      const state = reducer(initialState, {
         type: getData.pending,
         meta: {
            arg: dataTypes.CHARACTER,
         },
      });
      expect(state.dataType).toBe(dataTypes.CHARACTER);
      expect(state.status).toBe(loadingStatus.LOADING);
   });
   test('Fullfilled action', () => {
      const initialState = {
         ...dataInitialState,
      };

      const data = [{ id: '1' }, { id: '2' }, { id: '3' }];
      const state = reducer(initialState, {
         type: getData.fulfilled,
         payload: data,
      });
      expect(state.data).toEqual(data);
      expect(state.status).toBe(loadingStatus.IDLE);
   });
   test('Rejected action', () => {
      const initialState = {
         ...dataInitialState,
         dataType: dataTypes.CHARACTER,
      };
      const state = reducer(initialState, {
         type: getData.rejected,
      });
      expect(state.status).toBe(loadingStatus.ERROR);
      expect(state.dataType).toBeNull();
   });
});
