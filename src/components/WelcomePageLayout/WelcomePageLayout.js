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
import { useEffect, useLayoutEffect } from 'react';
import { setStatus } from '../../redux/reducers/data/dataSlice';
import usePageTitle from '../../hooks/usePageTitle';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import Description from '../Description/Description';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import AriseAnimation, {
   animationTypes,
} from '../AriseAnimation/AriseAnimation';
import useAriseTransition from '../../hooks/useAriseTransition';

export default function WelcomePageLayout() {
   const [scrolled, onScroll] = useElementScroll();
   const cashedImages = useSelector(selectCashedImages, shallowEqual);
   const imageCashed = cashedImages.includes(bgImage);
   const appStatus = useSelector(selectStatus);
   const dispatch = useDispatch();
   const fire = useAriseTransition();

   usePageTitle('Breaking Bad - Welcome!');

   // Seting loading status
   useEffect(() => {
      if (imageCashed && appStatus === loadingStatus.LOADING) {
         dispatch(setStatus(loadingStatus.IDLE));
      }
      if (!imageCashed && appStatus !== loadingStatus.LOADING) {
         dispatch(setStatus(loadingStatus.LOADING));
      }
   }, [imageCashed, appStatus, dispatch]);

   // Hide body scroll
   useLayoutEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = '');
   }, []);

   return (
      <>
         <Loader shown={appStatus === loadingStatus.LOADING} />
         <div
            className="WelcomePageLayout"
            style={{ backgroundPositionX: scrolled + '%' }}
         >
            <div className="WelcomePageLayout__wrapper" onScroll={onScroll}>
               <div className="WelcomePageLayout__topScreen">
                  <div className="WelcomePageLayout__header">
                     <AriseAnimation
                        fire={fire}
                        duration={300}
                        delay={200}
                        animationType={animationTypes.FROM_TOP}
                     >
                        <Header />
                     </AriseAnimation>
                  </div>
                  <div className="WelcomePageLayout__contacts">
                     <Contacts fire={fire} />
                  </div>
                  <div className="WelcomePageLayout__main">
                     <Description fire={fire} />
                  </div>
               </div>
               <div className="WelcomePageLayout__bottomScreen">
                  <div className="WelcomePageLayout__navigation">
                     <Navigation fire={fire} />
                  </div>
                  <div className="WelcomePageLayout__footer">
                     <Footer />
                  </div>
               </div>
            </div>
         </div>
         <img
            src={bgImage}
            alt=""
            onLoad={() => {
               if (!imageCashed) dispatch(setImageCashed(bgImage));
            }}
            hidden
         />
      </>
   );
}
