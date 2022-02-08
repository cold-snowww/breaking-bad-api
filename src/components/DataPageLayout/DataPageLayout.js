import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { loadingStatus } from '../../redux/common';
import { selectMenuStatus } from '../../redux/reducers/app/appSelectors';
import { toggleMenuStatus } from '../../redux/reducers/app/appSlice';
import { selectStatus } from '../../redux/reducers/data/dataSelectors';
import Burger from '../Burger/Burger';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import './DataPageLayout.scss';

export default function DataPageLayout() {
   const appStatus = useSelector(selectStatus);
   const menuIsOpen = useSelector(selectMenuStatus);

   const dispatch = useDispatch();
   const ref = useRef();

   return appStatus === loadingStatus.ERROR ? (
      <ErrorPage />
   ) : (
      <>
         <Loader shown={appStatus === loadingStatus.LOADING} />
         <div className="DataPageLayout">
            <div className="DataPageLayout__header">
               <Header />
            </div>
            <div
               className={`DataPageLayout__burger${
                  menuIsOpen ? ' menuOpened' : ''
               }`}
               onClick={() => dispatch(toggleMenuStatus())}
            >
               <Burger />
            </div>
            <div className="DataPageLayout__main">
               <CSSTransition
                  in={menuIsOpen}
                  timeout={5000}
                  nodeRef={ref}
                  mountOnEnter
                  unmountOnExit
               >
                  <div className="DataPageLayout__menu" ref={ref}></div>
               </CSSTransition>
            </div>
            <div className="DataPageLayout__footer">
               <Footer />
            </div>
         </div>
      </>
   );
}
