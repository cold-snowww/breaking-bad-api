import './WelcomePageLayout.scss';
import useElementScroll from '../../hooks/useElementScroll';
import Loader from '../Loader/Loader';
import bgImage from '../../images/background.jpg';
import { selectCashedImages } from '../../redux/reducers/app/appSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { setImageCashed } from '../../redux/reducers/app/appSlice';
import { selectStatus } from '../../redux/reducers/data/dataSelectors';
import { loadingStatus } from '../../redux/common';
import { useEffect } from 'react';
import { setStatus } from '../../redux/reducers/data/dataSlice';
import usePageTitle from '../../hooks/usePageTitle';
import Header from '../Header/Header';

export default function WelcomePageLayout() {
   const [scrolled, onScroll] = useElementScroll();
   const cashedImages = useSelector(selectCashedImages, shallowEqual);
   const appStatus = useSelector(selectStatus);
   const dispatch = useDispatch();

   usePageTitle('Breaking Bad - Welcome!');

   // Seting loading status
   useEffect(() => {
      const imageCashed = cashedImages.includes(bgImage);
      if (imageCashed && appStatus === loadingStatus.LOADING) {
         dispatch(setStatus(loadingStatus.IDLE));
      }
      if (!imageCashed && appStatus !== loadingStatus.LOADING) {
         dispatch(setStatus(loadingStatus.LOADING));
      }
   }, [cashedImages, appStatus, dispatch]);

   return (
      <>
         <Loader shown={appStatus === loadingStatus.LOADING} />
         <div className="WelcomePageLayout">
            <div
               className="WelcomePageLayout__wrapper"
               onScroll={onScroll}
               style={{ backgroundPositionX: scrolled + '%' }}
            >
               <div className="WelcomePageLayout__topScreen">
                  <div className="WelcomePageLayout__header">
                     <Header />
                  </div>
                  <div className="WelcomePageLayout__contacts">Contacts</div>
                  <div className="WelcomePageLayout__main">Main</div>
               </div>
               <div className="WelcomePageLayout__bottomScreen">
                  <div className="WelcomePageLayout__navigation">
                     Navigation
                  </div>
                  <div className="WelcomePageLayout__footer">Footer</div>
               </div>
            </div>
         </div>
         <img
            src={bgImage}
            alt=""
            onLoad={() => dispatch(setImageCashed(bgImage))}
            hidden
         />
      </>
   );
}
