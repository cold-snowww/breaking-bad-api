import { dataTypes } from '../../common';
import {
   getCashedData,
   cashingData,
   defineUrl,
   fetchData,
   payloadCreator_QuoteID,
   payloadCreator_Data,
} from './dataThunks';

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

const helpers = {
   dispatch: jest.fn(),
   getState() {
      return {
         data: {
            dataType: dataTypes.QUOTE,
            data: [
               { quote_id: 0 },
               { quote_id: 1 },
               { quote_id: 2 },
               { quote_id: 3 },
               { quote_id: 4 },
            ],
         },
      };
   },
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
   test('Dispatching correct setQuoteID action', () => {
      payloadCreator_QuoteID(null, helpers);
      const action = helpers.dispatch.mock.calls[0][0];
      expect(action.type).toBe('data/setQuoteID');
      expect(action.payload).toBeLessThan(helpers.getState().data.data.length);
   });
});

describe('Testing payloadCreator_Data function', () => {
   test('Return cashed data from session storage', async () => {
      sessionStorage.setItem(dataTypes.CHARACTER, JSON.stringify(storedData));

      const expectedValue = {
         dataType: dataTypes.CHARACTER,
         data: storedData,
      };

      const result = await payloadCreator_Data(dataTypes.CHARACTER);

      expect(result).toEqual(expectedValue);
      sessionStorage.clear();
   });
   test('Fetching data from server and cashing data', async () => {
      const originalFetch = global.fetch;
      global.fetch = jest.fn(originalFetch);
      const fetchedData = await payloadCreator_Data(dataTypes.CHARACTER);
      const data = JSON.parse(sessionStorage.getItem(dataTypes.CHARACTER));

      expect(fetch.mock.calls[0][0]).toBe(apiURLs[dataTypes.CHARACTER]);
      expect(data[0]).toHaveProperty('name');
      expect(data[0]).toHaveProperty('portrayed');
      expect(data[0]).toHaveProperty('nickname');
      expect(fetchedData.dataType).toBe(dataTypes.CHARACTER);

      global.fetch = originalFetch;
   });
});
