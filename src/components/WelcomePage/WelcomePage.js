import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStatus } from '../../redux/common';
import { selectMenuStatus } from '../../redux/reducers/app/appSelectors';
import { toggleMenuStatus } from '../../redux/reducers/app/appSlice';
import { selectStatus } from '../../redux/reducers/data/dataSelectors';
import { setStatus } from '../../redux/reducers/data/dataSlice';
import WelcomePageLayout from '../WelcomePageLayout/WelcomePageLayout';

export default function WelcomePage() {
   const dispatch = useDispatch();
   const appStatus = useSelector(selectStatus);

   // Clear errors if any exist
   useEffect(() => {
      if (appStatus === loadingStatus.ERROR) {
         dispatch(setStatus(loadingStatus.IDLE));
      }
   }, [appStatus, dispatch]);

   // Close menu if opened
   const menuIsOpened = useSelector(selectMenuStatus);
   useEffect(() => {
      if (menuIsOpened) dispatch(toggleMenuStatus());
   }, [menuIsOpened, dispatch]);

   return <WelcomePageLayout />;
}
