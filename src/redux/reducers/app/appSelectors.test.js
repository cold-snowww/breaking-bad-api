import { appInitialState } from './appInitialState';
import { selectMenuStatus } from './appSelectors';

const state = {
   app: appInitialState,
};

describe('Testing app selectors:', () => {
   test('Select menuStatus', () => {
      expect(selectMenuStatus(state)).toBe(false);
   });
});
