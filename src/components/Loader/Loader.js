import PropTypes from 'prop-types';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Dots from '../Dots/Dots';
import Flask from '../Flask/Flask';
import './Loader.scss';

export default function Loader({ shown }) {
   const ref = useRef();

   return (
      <CSSTransition
         in={shown}
         timeout={400}
         nodeRef={ref}
         mountOnEnter
         unmountOnExit
      >
         <div className="Loader" ref={ref}>
            <div className="Loader__wrapper">
               <div className="Loader__image">
                  <Flask />
               </div>
               <p className="Loader__text">
                  Loading
                  <Dots />
               </p>
            </div>
         </div>
      </CSSTransition>
   );
}

Loader.propTypes = {
   shown: PropTypes.bool.isRequired,
};
