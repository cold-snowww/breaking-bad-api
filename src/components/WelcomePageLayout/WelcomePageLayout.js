import useElementScroll from '../../hooks/useElementScroll';
import Loader from '../Loader/Loader';
import './WelcomePageLayout.scss';

export default function WelcomePageLayout() {
   const [scrolled, onScroll] = useElementScroll();
   const showLoader = true;

   return (
      <>
         <Loader shown={showLoader} />
         <div
            className="WelcomePageLayout"
            onScroll={onScroll}
            style={{ backgroundPositionX: scrolled + '%' }}
         >
            <div className="WelcomePageLayout__wrapper">
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
      </>
   );
}
