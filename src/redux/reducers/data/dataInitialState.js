import { loadingStatus } from '../../common';

export const dataInitialState = {
   status: loadingStatus.LOADING,
   data: null,
   dataType: null,
   // Initial quote id is always 1
   quoteID: 1,
   // First key, second value, use with shallowEqual
   filter: [],
};
