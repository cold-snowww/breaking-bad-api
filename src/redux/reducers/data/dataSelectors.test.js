import { dataTypes, loadingStatus, searchStructure } from '../../common';
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
         data: {
            ...state.data,
         },
      };
      stateCopy.data.filter = [];
      expect(selectors.selectFilteredData(stateCopy)).toBeNull();
   });
   test('Select unique search values', () => {
      const stateCopy = {
         data: {
            ...state.data,
         },
      };
      stateCopy.data.dataType = dataTypes.EPISODE;
      stateCopy.data.data = [
         { title: 'One', season: '1' },
         { title: 'Two', season: '4' },
         { title: 'Two', season: '4' },
         { title: 'Three', season: '3' },
         { title: 'One', season: '2' },
      ];

      const expectedValue = [
         {
            fieldName: 'title',
            caption: 'Title',
            uniqValues: ['One', 'Two', 'Three'],
         },
         {
            fieldName: 'season',
            caption: 'Season',
            uniqValues: ['1', '4', '3', '2'],
         },
      ];

      expect(selectors.selectSearchValues(stateCopy)).toEqual(expectedValue);
   });
});
