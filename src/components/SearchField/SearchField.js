import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { toggleMenuStatus } from '../../redux/reducers/app/appSlice';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './SearchField.scss';

export default function SearchField({
   caption,
   fieldName,
   uniqValues,
   setActiveField,
   opened,
}) {
   const { pathname } = useLocation();
   const ref = useRef();
   const dispatch = useDispatch();

   return (
      <div className="SearchField">
         <p
            className="SearchField__title"
            onClick={() => setActiveField(fieldName)}
         >
            {caption}
         </p>
         <CSSTransition
            in={opened}
            timeout={300}
            nodeRef={ref}
            mountOnEnter
            unmountOnExit
         >
            <div className="SearchField__options" ref={ref}>
               <div className="SearchField__wrapper">
                  <button
                     className="SearchField__close"
                     onClick={() => setActiveField(null)}
                  >
                     <AiOutlineCloseCircle />
                  </button>
                  <ul className="SearchField__list">
                     {uniqValues.map((val) => (
                        <li
                           className="SearchField__listItem"
                           key={val}
                           onClick={() => {
                              // setActiveField(null);
                              dispatch(toggleMenuStatus());
                              setTimeout(() => setActiveField(null), 700);
                           }}
                        >
                           <Link
                              className="SearchField__link"
                              to={`${pathname}?${new URLSearchParams([
                                 ['filter', fieldName],
                                 ['value', val],
                              ])}`}
                           >
                              {val}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </CSSTransition>
      </div>
   );
}

SearchField.propTypes = {
   caption: PropTypes.string.isRequired,
   fieldName: PropTypes.string.isRequired,
   uniqValues: PropTypes.arrayOf(PropTypes.string).isRequired,
   setActiveField: PropTypes.func.isRequired,
   opened: PropTypes.bool,
};
