import reducer, { setImageCashed, toggleMenuStatus } from './appSlice';
import { appInitialState } from './appInitialState';

describe('Testing reducers and action creators', () => {
   test('Toggle menu status', () => {
      const expectedValue = {
         ...appInitialState,
         menuStatus: !appInitialState.menuStatus,
      };

      expect(reducer(appInitialState, toggleMenuStatus())).toEqual(
         expectedValue
      );
   });
   test('Add cashed image to the state', () => {
      const expectedValue = {
         ...appInitialState,
         cashedImages: ['imageURL'],
      };
      expect(reducer(appInitialState, setImageCashed('imageURL'))).toEqual(
         expectedValue
      );
   });
});
