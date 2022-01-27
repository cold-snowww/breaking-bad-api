import { appInitialState } from './appInitialState';
import { selectCashedImages, selectMenuStatus } from './appSelectors';

const state = {
   app: appInitialState,
};

describe('Testing app selectors:', () => {
   test('Select menuStatus', () => {
      expect(selectMenuStatus(state)).toBe(false);
   });
   test('Select cashedImages', () => {
      const newState = {
         app: {
            ...appInitialState,
            cashedImages: ['imageURL'],
         },
      };
      expect(selectCashedImages(newState)[0]).toBe('imageURL');
   });
});
