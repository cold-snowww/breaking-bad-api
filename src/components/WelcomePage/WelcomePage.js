import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStatus } from '../../redux/common';
import { selectMenuStatus } from '../../redux/reducers/app/appSelectors';
import { toggleMenuStatus } from '../../redux/reducers/app/appSlice';
import {
   selectFilter,
   selectStatus,
} from '../../redux/reducers/data/dataSelectors';
import { setFilter, setStatus } from '../../redux/reducers/data/dataSlice';
import WelcomePageLayout from '../WelcomePageLayout/WelcomePageLayout';

export default function WelcomePage() {
   const dispatch = useDispatch();
   const appStatus = useSelector(selectStatus);
   const filter = useSelector(selectFilter);

   // Clear errors and filters if any exist
   useEffect(() => {
      if (appStatus === loadingStatus.ERROR) {
         dispatch(setStatus(loadingStatus.IDLE));
      }
      if (filter[0] || filter[1]) {
         dispatch(setFilter(null, null));
      }
   }, [appStatus, filter, dispatch]);

   // Close menu if opened
   const menuIsOpened = useSelector(selectMenuStatus);
   useEffect(() => {
      if (menuIsOpened) dispatch(toggleMenuStatus());
   }, [menuIsOpened, dispatch]);

   return <WelcomePageLayout />;
}
