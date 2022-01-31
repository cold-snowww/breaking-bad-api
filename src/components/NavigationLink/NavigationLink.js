import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavigationLink.scss';

export default function NavigationLink({ url, title, icon, text }) {
   return (
      <Link to={url} className="NavigationLink">
         <div className="NavigationLink__header">
            <h3 className="NavigationLink__title">{title}</h3>
            <div className="NavigationLink__icon">{icon}</div>
         </div>
         <p className="NavigationLink__text">{text}</p>
      </Link>
   );
}

NavigationLink.propTypes = {
   url: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   icon: PropTypes.element,
   text: PropTypes.string.isRequired,
};
