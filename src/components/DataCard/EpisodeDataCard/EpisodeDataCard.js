import DataCard from '../DataCard';
import { BiMoviePlay } from 'react-icons/bi';

export default function EpisodeDataCard({ data }) {
   return (
      <DataCard title={data.title} icon={<BiMoviePlay />}>
         <div className="DataCard__info">
            <p className="DataCard__field">Season:</p>
            <p className="DataCard__value">{data.season}</p>
            <p className="DataCard__field">Air date:</p>
            <p className="DataCard__value">{data.air_date}</p>
            <p className="DataCard__field">Episode:</p>
            <p className="DataCard__value">{data.episode}</p>
            <p className="DataCard__field">Characters:</p>
            <div className="DataCard__value">
               <ul className="DataCard__valueList">
                  {data.characters.map((val) => (
                     <li key={val}>{val}</li>
                  ))}
               </ul>
            </div>
         </div>
      </DataCard>
   );
}
