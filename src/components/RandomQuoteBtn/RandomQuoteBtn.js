import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { dataTypes } from '../../redux/common';
import { toggleMenuStatus } from '../../redux/reducers/app/appSlice';
import { selectRandomQuoteID } from '../../redux/reducers/data/dataSelectors';
import { changeRandomQuoteID } from '../../redux/reducers/data/dataThunks';
import './RandomQuoteBtn.scss';

export default function RandomQuoteBtn({ dataType }) {
   const randomQuoteId = useSelector(selectRandomQuoteID);
   const dispatch = useDispatch();
   const { pathname } = useLocation();

   if (dataType !== dataTypes.QUOTE) return null;
   return (
      <Link
         to={`${pathname}?${new URLSearchParams([
            ['filter', 'quote_id'],
            ['value', randomQuoteId],
         ])}`}
         className="RandomQuoteBtn"
         onClick={() => {
            dispatch(changeRandomQuoteID());
            dispatch(toggleMenuStatus());
         }}
      >
         Get random quote
      </Link>
   );
}

RandomQuoteBtn.propTypes = {
   dataType: PropTypes.string.isRequired,
};
