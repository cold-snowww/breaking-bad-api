import { dataTypes } from '../../common';
import { getCashedData, cashingData, defineUrl, fetchData } from './dataThunks';

const storedData = [
   { id: 1, name: 'Walter' },
   { id: 2, name: 'Skyler' },
];

const apiURLs = {
   [dataTypes.CHARACTER]:
      'https://www.breakingbadapi.com/api/characters?category=Breaking+Bad',
   [dataTypes.EPISODE]:
      'https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad',
   [dataTypes.QUOTE]:
      'https://www.breakingbadapi.com/api/quotes?series=Breaking+Bad',
};

describe('Testing getCashedData function:', () => {
   test('Return cashed value from sessionStorage', () => {
      sessionStorage.setItem(dataTypes.CHARACTER, JSON.stringify(storedData));
      expect(getCashedData(dataTypes.CHARACTER)).toEqual(storedData);
      sessionStorage.clear();
   });

   test('Return null if value does not exist', () => {
      expect(getCashedData(dataTypes.EPISODE)).toBe(null);
      sessionStorage.clear();
   });
});

describe('Testing cashingData function:', () => {
   test('Write data in sessionStorage', () => {
      cashingData(dataTypes.CHARACTER, storedData);
      expect(JSON.parse(sessionStorage.getItem(dataTypes.CHARACTER))).toEqual(
         storedData
      );
      sessionStorage.clear();
   });
});

describe('Testing defineUrl function:', () => {
   test('Characters url', () => {
      expect(defineUrl(dataTypes.CHARACTER)).toBe(apiURLs[dataTypes.CHARACTER]);
   });
   test('Episodes url', () => {
      expect(defineUrl(dataTypes.EPISODE)).toBe(apiURLs[dataTypes.EPISODE]);
   });
   test('Quotes url', () => {
      expect(defineUrl(dataTypes.QUOTE)).toBe(apiURLs[dataTypes.QUOTE]);
   });
});

describe('Testing fetchData function:', () => {
   test('Fetching characters data', async () => {
      const data = await fetchData(defineUrl(dataTypes.CHARACTER));
      expect(data[0]).toHaveProperty('name');
      expect(data[0]).toHaveProperty('portrayed');
      expect(data[0]).toHaveProperty('nickname');
   });
   test('Fetching episodes data', async () => {
      const data = await fetchData(defineUrl(dataTypes.EPISODE));
      expect(data[0]).toHaveProperty('title');
      expect(data[0]).toHaveProperty('season');
   });
   test('Fetching quotes data', async () => {
      const data = await fetchData(defineUrl(dataTypes.QUOTE));
      expect(data[0]).toHaveProperty('quote_id');
      expect(data[0]).toHaveProperty('quote');
      expect(data[0]).toHaveProperty('author');
   });
   test('Error when url is wrong', async () => {
      let error = null;
      try {
         await fetchData('https://www.breakingbadapi.com/api/wrongurl');
      } catch (err) {
         error = err;
      }
      expect(error).toBeInstanceOf(Error);
   });
});

describe('Testing payloadCreator_QuoteID function', () => {
   test('Dispatching setQuoteID action', () => {});
});
