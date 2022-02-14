import PropTypes from 'prop-types';
import './Spinner.scss';

export default function Spinner({ type }) {
   return <div className={`Spinner spinner-${type}`}></div>;
}

Spinner.propTypes = {
   type: PropTypes.number.isRequired,
};

// Use numbers between 1-42
