import { useSelector } from 'react-redux';
import {
   selectDataType,
   selectStatus,
} from '../../redux/reducers/data/dataSelectors';
import RandomQuoteBtn from '../RandomQuoteBtn/RandomQuoteBtn';
import SearchBlock from '../SearchBlock/SearchBlock';
import MenuSectionLinks from '../MenuSectionLinks/MenuSectionLinks';
import './Menu.scss';
import { loadingStatus } from '../../redux/common';

export default function Menu() {
   const dataType = useSelector(selectDataType);
   const status = useSelector(selectStatus);

   if (!dataType || status !== loadingStatus.IDLE) return null;

   return (
      <div className="Menu">
         <SearchBlock dataType={dataType} />
         <RandomQuoteBtn dataType={dataType} />
         <MenuSectionLinks dataType={dataType} />
      </div>
   );
}
