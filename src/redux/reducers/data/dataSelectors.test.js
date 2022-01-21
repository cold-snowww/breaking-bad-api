import { dataTypes, loadingStatus } from '../../common';
import * as selectors from './dataSelectors';

const state = {
   data: {
      status: loadingStatus.LOADING,
      data: [
         { id: '1' },
         { id: '2' },
         { id: '3' },
         { id: '4' },
         { id: '3' },
         { id: '1' },
      ],
      dataType: dataTypes.CHARACTER,
      quoteID: 3,
      filter: ['id', '4'],
   },
};

describe('Testing plain selectors:', () => {
   test('Select status', () => {
      expect(selectors.selectStatus(state)).toBe(state.data.status);
   });
   test('Select data', () => {
      expect(selectors.selectData(state)).toEqual(state.data.data);
   });
   test('Select dataType', () => {
      expect(selectors.selectDataType(state)).toBe(state.data.dataType);
   });
   test('Select randomQuoteID', () => {
      expect(selectors.selectRandomQuoteID(state)).toBe(state.data.quoteID);
   });
   test('Select filter', () => {
      expect(selectors.selectFilter(state)).toEqual(state.data.filter);
   });
});

describe('Testing memoized selectors', () => {
   test('Select filtered data', () => {
      const expectedValue = [{ id: '4' }];
      expect(selectors.selectFilteredData(state)).toEqual(expectedValue);
   });
   test('Select filtered data returns null when filter is empty', () => {
      const stateCopy = {
         ...state,
      };
      stateCopy.data.filter = [];
      expect(selectors.selectFilteredData(stateCopy)).toBeNull();
   });
});
