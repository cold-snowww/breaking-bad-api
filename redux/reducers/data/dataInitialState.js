import { loadingStatus } from '../../common';

export const dataInitialState = {
   status: loadingStatus.LOADING,
   data: null,
   dataType: null,
   randomQuote: 1,
   filter: {
      key: null,
      value: null,
   },
};
