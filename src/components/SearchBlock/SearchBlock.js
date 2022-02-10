import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchValues } from '../../redux/reducers/data/dataSelectors';
import SearchField from '../SearchField/SearchField';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBlock.scss';
import { sectionURLs } from '../../redux/common';

export default function SearchBlock({ dataType }) {
   const searchValues = useSelector(selectSearchValues);
   const [activeField, setActiveField] = useState(null);

   return (
      <div className="SearchBlock">
         <div className="SearchBlock__header">
            <h3 className="SearchBlock__title">
               {sectionURLs.filter((url) => url.dataType === dataType)[0]
                  .caption + ':'}
            </h3>
            <div className="SearchBlock__icon">
               <AiOutlineSearch />
            </div>
         </div>
         <div className="SearchBlock__fields">
            {searchValues.map((searchField) => (
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

SearchBlock.propTypes = {
   dataType: PropTypes.string.isRequired,
};
