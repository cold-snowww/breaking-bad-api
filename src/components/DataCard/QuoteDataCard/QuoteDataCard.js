import DataCard from '../DataCard';
import { BsChatLeftQuote } from 'react-icons/bs';

export default function QuoteDataCard({ data }) {
   return (
      <DataCard title={data.author} icon={<BsChatLeftQuote />}>
         <p className="DataCard__text">{data.quote}</p>
      </DataCard>
   );
}
