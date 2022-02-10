import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sectionURLs } from '../../redux/common';
import './MenuSectionLinks.scss';

export default function MenuSectionLinks({ dataType }) {
   return (
      <div className="MenuSectionLinks">
         {sectionURLs
            .filter((url) => url.dataType !== dataType)
            .map(({ dataType, url, caption }) => (
               <Link to={url} key={dataType} className="MenuSectionLinks__link">
                  {caption}
               </Link>
            ))}
      </div>
   );
}

MenuSectionLinks.propTypes = {
   dataType: PropTypes.string.isRequired,
};
