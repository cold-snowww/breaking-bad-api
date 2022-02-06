import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ServicePage.scss';

export default function ServicePage({ text, icon, title, homelink = true }) {
   return (
      <div className="ServicePage">
         <div className="ServicePage__window">
            <header className="ServicePage__header">
               <h3 className="ServicePage__title">{title}</h3>
               <div className="ServicePage__icon">{icon}</div>
            </header>
            <p className="ServicePage__text">
               {text}
               <br />
               {homelink ? (
                  <span>
                     You can try to go to the{' '}
                     <Link to="/" className="ServicePage__homelink">
                        Homepage
                     </Link>
                     .
                  </span>
               ) : null}
            </p>
         </div>
      </div>
   );
}

ServicePage.propTypes = {
   text: PropTypes.node.isRequired,
   icon: PropTypes.element.isRequired,
   title: PropTypes.string.isRequired,
   homelink: PropTypes.bool,
};
