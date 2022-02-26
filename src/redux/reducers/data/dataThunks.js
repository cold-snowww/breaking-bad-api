import { createAsyncThunk } from '@reduxjs/toolkit';
import { dataTypes } from '../../common';
import { setQuoteID } from './dataSlice';

// --- getData thunk ---
// Get data from server or SessionStorage
export const getData = createAsyncThunk('data/getData', payloadCreator_Data);

export async function payloadCreator_Data(dataType) {
   // Try to get cashed data from local storage
   const cashedData = getCashedData(dataType);
   if (cashedData) {
      return cashedData;
   }
   // Define URL and fetch JSON data from url
   const url = defineUrl(dataType);
   // Fetching data from server
   let fetchedData;
   try {
      fetchedData = await fetchData(url);
   } catch (error) {
      console.error(error.message);
      throw error;
   }
   // Cashing data in localStorage
   cashingData(dataType, fetchedData);

   return fetchedData;
}

// Get cashed data from sessionStorage
export function getCashedData(dataType) {
   if (window.sessionStorage) {
      const storedData = sessionStorage.getItem(dataType);
      if (storedData) {
         try {
            const parsedData = JSON.parse(storedData);
            return parsedData;
         } catch (error) {
            console.error(
               `Unable parse ${dataType} JSON data from localStorage`
            );
         }
      }
   } else {
      console.error('Unable to use sessionStorage');
   }
   return null;
}

// Cashing data in localStorage
export function cashingData(dataType, data) {
   if (window.sessionStorage) {
      try {
         const JSONReceivedData = JSON.stringify(data);
         sessionStorage.setItem(dataType, JSONReceivedData);
      } catch (error) {
         console.error(`Unable to convert ${dataType} data to JSON`);
      }
   } else {
      console.error('Unable to use sessionStorage');
   }
}

// Define URL to get fetch request
export function defineUrl(dataType) {
   const baseURL = 'https://www.breakingbadapi.com';

   let apiURL = '';
   switch (dataType) {
      case dataTypes.CHARACTER:
         apiURL = '/api/characters?category=Breaking+Bad';
         break;
      case dataTypes.EPISODE:
         apiURL = '/api/episodes?series=Breaking+Bad';
         break;
      case dataTypes.QUOTE:
         apiURL = '/api/quotes?series=Breaking+Bad';
         break;
      default:
         apiURL = null;
   }

   return apiURL && baseURL + apiURL;
}

// Fetching data from url
export async function fetchData(url) {
   if (url) {
      const response = await fetch(url);
      if (!response.ok) {
         throw new FetchingError(response.status, url);
      }
      const data = await response.json();
      return data;
   }
}

// Fetching errors class
class FetchingError extends Error {
   constructor(status, url) {
      super(`Data fetching error, status: ${status}, url: ${url}`);
      this.name = 'FetchingError';
   }
}

// --- Change random quote id ---
// Change randomQuoteID field by random id
export const changeRandomQuoteID = createAsyncThunk(
   'data/setRandomQuote',
   payloadCreator_QuoteID
);

export function payloadCreator_QuoteID(arg, helpers) {
   const state = helpers.getState();
   const dispatch = helpers.dispatch;
   const dataType = state.data.dataType;
   // If dataType is not quotes, return
   if (dataType !== dataTypes.QUOTE) return;
   const quotes = state.data.data;
   // Get random quote ID
   const index = Math.round(Math.random() * (quotes.length - 1));
   const randomID = quotes[index].quote_id;
   dispatch(setQuoteID(randomID));
}
