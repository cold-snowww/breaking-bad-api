import { useSelector } from 'react-redux';
import { selectDataType } from '../../redux/reducers/data/dataSelectors';
import RandomQuoteBtn from '../RandomQuoteBtn/RandomQuoteBtn';
import SearchBlock from '../SearchBlock/SearchBlock';
import MenuSectionLinks from '../MenuSectionLinks/MenuSectionLinks';
import './Menu.scss';

export default function Menu() {
   const dataType = useSelector(selectDataType);

   return (
      <div className="Menu">
         <SearchBlock dataType={dataType} />
         <RandomQuoteBtn dataType={dataType} />
         <MenuSectionLinks dataType={dataType} />
      </div>
   );
}
