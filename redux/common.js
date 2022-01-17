// Loading status
const loadingStatus = {
   LOADING: 'loading',
   IDLE: 'idle',
   ERROR: 'error',
};
Object.freeze(loadingStatus);
export { loadingStatus };

// Data types
const dataTypes = {
   CHARACTER: 'character',
   EPISODE: 'episode',
   QUOTE: 'quote',
};
Object.freeze(dataTypes);
export { dataTypes };

// Filter keys
const filterKeys = {
   CHARACTER: {
      NAME: 'name',
      ACTOR: 'portrayed',
      NICK: 'nickname',
   },
   EPISODE: {
      TITLE: 'title',
      SEASON: 'season',
   },
   QUOTE: {
      ID: 'quote_id',
      AUTHOR: 'author',
   },
};
Object.freeze(filterKeys);
export { filterKeys };

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

class FetchingError extends Error {
   constructor(status, url) {
      super(`Data fetching error, status: ${status}, url: ${url}`);
      this.name = 'FetchingError';
   }
}
