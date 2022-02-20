import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sectionURLs } from '../../redux/common';
import { selectDataType } from '../../redux/reducers/data/dataSelectors';
import { clearFilter } from '../../redux/reducers/data/dataSlice';
import './MenuSectionLinks.scss';

export default function MenuSectionLinks({ className }) {
   const dispatch = useDispatch();
   const dataType = useSelector(selectDataType);

   if (!dataType) return null;

   return (
      <div
         className={
            className ? `MenuSectionLinks ${className}` : 'MenuSectionLinks'
         }
      >
         {sectionURLs
            .filter((url) => url.dataType !== dataType)
            .map(({ dataType, url, caption }) => (
               <Link
                  to={url}
                  key={dataType}
                  className="MenuSectionLinks__link"
                  onClick={() => dispatch(clearFilter())}
               >
                  {caption}
               </Link>
            ))}
      </div>
   );
}

MenuSectionLinks.propTypes = {
   className: PropTypes.string,
};
