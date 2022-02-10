import PropTypes from 'prop-types';
import './DataCard.scss';

export default function DataCard({ title, icon, children }) {
   return (
      <article className="DataCard">
         <header className="DataCard__header">
            <h2 className="DataCard__title">{title}</h2>
            <div className="DataCard__icon">{icon}</div>
         </header>
         {children}
      </article>
   );
}

DataCard.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.node,
   children: PropTypes.node,
};
