import reducer, { toggleMenuStatus } from './appSlice';
import { appInitialState } from './appInitialState';

describe('Testing reducers and action creators', () => {
   test('Toggle menu status', () => {
      const expectedValue = {
         menuStatus: !appInitialState.menuStatus,
      };

      expect(reducer(appInitialState, toggleMenuStatus())).toEqual(
         expectedValue
      );
   });
});
