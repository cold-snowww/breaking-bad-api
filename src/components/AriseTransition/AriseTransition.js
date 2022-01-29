import { Transition } from 'react-transition-group';

export default function AriseTransition({
   fire,
   children,
   transitionType,
   delay = 0,
   duration = 500,
}) {
   let defaultStyle = {
      // transition: `opacity ${duration}ms cubic-bezier(1,0,1,.5) ${delay}ms, transform ${duration}ms cubic-bezier(0,.5,.4,1) ${delay}ms`,
      transition: `opacity ${duration}ms ease-in ${delay}ms, transform ${duration}ms ease-in ${delay}ms`,
      opacity: 0,
   };

   const translateValue = 100;
   const zoomValue = 0.8;
   const rotateValue = 90;

   switch (transitionType) {
      // Move
      case transitionTypes.FROM_LEFT:
         defaultStyle.transform = `translateX(-${translateValue}%)`;
         break;
      case transitionTypes.FROM_TOP:
         defaultStyle.transform = `translateY(-${translateValue}%)`;
         break;
      case transitionTypes.FROM_RIGHT:
         defaultStyle.transform = `translateX(${translateValue}%)`;
         break;
      case transitionTypes.FROM_BOTTOM:
         defaultStyle.transform = `translateY(${translateValue}%)`;
         break;
      // Zoom
      case transitionTypes.ZOOM_IN:
         defaultStyle.transform = `scale(${1 - zoomValue})`;
         break;
      case transitionTypes.ZOOM_OUT:
         defaultStyle.transform = `scale(${1 + zoomValue})`;
         break;
      // Rotate
      case transitionTypes.ROTATE_LEFT:
         defaultStyle.transform = `rotate(-${rotateValue}deg)`;
         break;
      case transitionTypes.ROTATE_RIGHT:
         defaultStyle.transform = `rotate(${rotateValue}deg)`;
         break;
      case transitionTypes.FLIP_HR:
         defaultStyle.transform = `rotate3D(0,1,0,90deg)`;
         break;
      case transitionTypes.FLIP_VR:
         defaultStyle.transform = `rotate3D(1,0,0,90deg)`;
         break;
      case transitionTypes.FLIP_DG:
         defaultStyle.transform = `rotate3D(1,1,0,-90deg)`;
         break;
      default:
         break;
   }

   const transitionStyles = {
      entering: {
         opacity: 1,
         transform: 'none',
      },
      entered: {
         opacity: 1,
         transform: 'none',
      },
      exiting: {
         opacity: 0,
         transform: defaultStyle.transform,
      },
      exited: {
         opacity: 0,
         transform: defaultStyle.transform,
      },
   };

   return (
      <Transition in={fire} timeout={duration}>
         {(state) => (
            <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
               {children}
            </div>
         )}
      </Transition>
   );
}

export const transitionTypes = {
   FROM_LEFT: 'fromLeft',
   FROM_RIGHT: 'fromRight',
   FROM_TOP: 'fromTop',
   FROM_BOTTOM: 'fromBottom',
   ZOOM_IN: 'zoomIn',
   ZOOM_OUT: 'zoomOut',
   ROTATE_LEFT: 'rotateLeft',
   ROTATE_RIGHT: 'rotateRight',
   FLIP_HR: 'flipHr',
   FLIP_VR: 'flipVr',
   FLIP_DG: 'flipDg',
};
