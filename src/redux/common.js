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
