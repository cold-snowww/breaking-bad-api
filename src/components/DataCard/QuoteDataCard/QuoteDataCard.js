import DataCard from '../DataCard';
import { BsChatLeftQuote } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function QuoteDataCard({ data }) {
   return (
      <DataCard title={data.author} icon={<BsChatLeftQuote />}>
         <p className="DataCard__text">{data.quote}</p>
      </DataCard>
   );
}

QuoteDataCard.propTypes = {
   data: PropTypes.shape({
      author: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
   }),
};
