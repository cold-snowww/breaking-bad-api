import { useSelector } from 'react-redux';
import { loadingStatus } from '../../redux/common';
import { selectStatus } from '../../redux/reducers/data/dataSelectors';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import './DataPageLayout.scss';

export default function DataPageLayout() {
   const appStatus = useSelector(selectStatus);

   return appStatus === loadingStatus.ERROR ? (
      <ErrorPage />
   ) : (
      <>
         <Loader shown={appStatus === loadingStatus.LOADING} />
         <div className="DataPageLayout">
            <div className="DataPageLayout__header">
               <Header />
            </div>
            <div className="DataPageLayout__burger"></div>
            <div className="DataPageLayout__main">
               <div className="DataPageLayout__menu"></div>
            </div>
            <div className="DataPageLayout__footer">
               <Footer />
            </div>
         </div>
      </>
   );
}
