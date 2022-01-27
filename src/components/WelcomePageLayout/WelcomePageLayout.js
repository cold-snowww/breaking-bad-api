import './WelcomePageLayout.scss';
import useElementScroll from '../../hooks/useElementScroll';
import Loader from '../Loader/Loader';
import bgImage from '../../images/background.jpg';
import { selectCashedImages } from '../../redux/reducers/app/appSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { setImageCashed } from '../../redux/reducers/app/appSlice';

export default function WelcomePageLayout() {
   const [scrolled, onScroll] = useElementScroll();
   const cashedImages = useSelector(selectCashedImages, shallowEqual);
   const dispatch = useDispatch();

   return (
      <>
         <Loader shown={!cashedImages.includes(bgImage)} />
         <div className="WelcomePageLayout">
            <div
               className="WelcomePageLayout__wrapper"
               onScroll={onScroll}
               style={{ backgroundPositionX: scrolled + '%' }}
            >
               <div className="WelcomePageLayout__topScreen">
                  <div className="WelcomePageLayout__header">Header</div>
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
