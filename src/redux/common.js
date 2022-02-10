// Loading status
const loadingStatus = {
   LOADING: 'loading',
   IDLE: 'idle',
   ERROR: 'error',
};
Object.freeze(loadingStatus);

// Data types
const dataTypes = {
   CHARACTER: 'character',
   EPISODE: 'episode',
   QUOTE: 'quote',
};
Object.freeze(dataTypes);

// Search structure
const searchStructure = {
   [dataTypes.CHARACTER]: [
      { fieldName: 'name', caption: 'Name' },
      { fieldName: 'portrayed', caption: 'Actor' },
      { fieldName: 'nickname', caption: 'Nickname' },
   ],

   [dataTypes.EPISODE]: [
      { fieldName: 'title', caption: 'Title' },
      { fieldName: 'season', caption: 'Season' },
   ],

   [dataTypes.QUOTE]: [{ fieldName: 'author', caption: 'Author' }],
};
Object.freeze(searchStructure);

const sectionURLs = [
   { dataType: dataTypes.CHARACTER, caption: 'Characters', url: '/character' },
   { dataType: dataTypes.EPISODE, caption: 'Episodes', url: '/episode' },
   { dataType: dataTypes.QUOTE, caption: 'Quotes', url: '/quote' },
];
Object.freeze(sectionURLs);

export { loadingStatus, dataTypes, searchStructure, sectionURLs };
