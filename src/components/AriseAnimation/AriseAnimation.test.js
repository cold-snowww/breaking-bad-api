import { getKeyFrames, animationTypes } from './AriseAnimation';

describe('Testing getKeyFrames:', () => {
   test('Return FROM_ keyFrames', () => {
      const expectedValue = [
         { opacity: 0, transform: 'translateX(-50%)' },
         { opacity: 0.2, transform: 'translateX(-20%)' },
         { opacity: 1, transform: 'none' },
      ];

      expect(getKeyFrames(animationTypes.FROM_LEFT)).toEqual(expectedValue);
   });

   test('Return ZOOM_IN keyFrames', () => {
      const expectedValue = [
         { opacity: 0, transform: 'scale(0.00)' },
         { opacity: 0.2, transform: 'scale(0.60)' },
         { opacity: 1, transform: 'none' },
      ];

      expect(getKeyFrames(animationTypes.ZOOM_IN)).toEqual(expectedValue);
   });

   test('Return ZOOM_OUT keyFrames', () => {
      const expectedValue = [
         { opacity: 0, transform: 'scale(2.00)' },
         { opacity: 0.2, transform: 'scale(1.40)' },
         { opacity: 1, transform: 'none' },
      ];

      expect(getKeyFrames(animationTypes.ZOOM_OUT)).toEqual(expectedValue);
   });

   test('Return ROTATE_ keyFrames', () => {
      const expectedValue = [
         { opacity: 0, transform: 'rotate(-90deg)' },
         { opacity: 0.2, transform: 'rotate(-36deg)' },
         { opacity: 1, transform: 'none' },
      ];

      expect(getKeyFrames(animationTypes.ROTATE_LEFT)).toEqual(expectedValue);
   });

   test('Return FLIP_ keyFrames', () => {
      const expectedValue = [
         { opacity: 0, transform: 'rotate3D(0,1,0,90deg)' },
         { opacity: 0.2, transform: 'rotate3D(0,1,0,36deg)' },
         { opacity: 1, transform: 'none' },
      ];

      expect(getKeyFrames(animationTypes.FLIP_HR)).toEqual(expectedValue);
   });

   test('Return keyFrames without args', () => {
      const expectedValue = [{ opacity: 0 }, { opacity: 0.2 }, { opacity: 1 }];

      expect(getKeyFrames()).toEqual(expectedValue);
   });
});
