import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sectionURLs } from '../../redux/common';
import { clearFilter } from '../../redux/reducers/data/dataSlice';
import './MenuSectionLinks.scss';

export default function MenuSectionLinks({ dataType }) {
   const dispatch = useDispatch();

   return (
      <div className="MenuSectionLinks">
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
   dataType: PropTypes.string.isRequired,
};
