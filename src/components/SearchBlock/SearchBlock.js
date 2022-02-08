import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchValues } from '../../redux/reducers/data/dataSelectors';
import SearchField from '../SearchField/SearchField';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBlock.scss';

export default function SearchBlock() {
   const serchValues = useSelector(selectSearchValues);
   const [activeField, setActiveField] = useState(null);

   return (
      <div className="SearchBlock">
         <div className="SearchBlock__header">
            <h3 className="SearchBlock__title">Search by:</h3>
            <div className="SearchBlock__icon">
               <AiOutlineSearch />
            </div>
         </div>
         <div className="SearchBlock__fields">
            {serchValues.map((searchField) => (
               <SearchField
                  {...searchField}
                  key={searchField.fieldName}
                  opened={searchField.fieldName === activeField}
                  setActiveField={setActiveField}
               />
            ))}
         </div>
      </div>
   );
}
