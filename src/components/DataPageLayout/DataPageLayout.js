import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { loadingStatus } from '../../redux/common';
import { selectMenuStatus } from '../../redux/reducers/app/appSelectors';
import { toggleMenuStatus } from '../../redux/reducers/app/appSlice';
import { selectStatus } from '../../redux/reducers/data/dataSelectors';
import Burger from '../Burger/Burger';
import CardHolder from '../CardHolder/CardHolder';
import Contacts from '../Contacts/Contacts';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Menu from '../Menu/Menu';
import MenuSectionLinks from '../MenuSectionLinks/MenuSectionLinks';
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
            <div className="DataPageLayout__sectionsDesktop">
               <MenuSectionLinks className="MenuSectionLinks-desktop" />
            </div>
            <div className="DataPageLayout__contactsDesktop">
               <Contacts fixed />
            </div>
            <div className="DataPageLayout__main">
               <CSSTransition in={menuIsOpen} timeout={400} nodeRef={ref}>
                  <div className="DataPageLayout__menu" ref={ref}>
                     <Menu />
                  </div>
               </CSSTransition>
               <CardHolder />
            </div>
            <div className="DataPageLayout__footer">
               <Footer />
            </div>
         </div>
      </>
   );
}
