import { useSelector } from 'react-redux';
import { dataTypes } from '../../redux/common';
import {
   selectDataType,
   selectFilteredData,
} from '../../redux/reducers/data/dataSelectors';
import CharacterDataCard from '../DataCard/CharacterDataCard';
import EmptyDataCard from '../DataCard/EmptyDataCard';
import EpisodeDataCard from '../DataCard/EpisodeDataCard';
import QuoteDataCard from '../DataCard/QuoteDataCard';
import './CardHolder.scss';

export default function CardHolder() {
   const dataArray = useSelector(selectFilteredData);
   const dataType = useSelector(selectDataType);

   let Card;

   switch (dataType) {
      case dataTypes.CHARACTER:
         Card = CharacterDataCard;
         break;
      case dataTypes.EPISODE:
         Card = EpisodeDataCard;
         break;
      case dataTypes.QUOTE:
         Card = QuoteDataCard;
         break;
      default:
         Card = null;
         break;
   }

   return (
      <main className="CardHolder">
         {!dataArray ? (
            <EmptyDataCard />
         ) : (
            dataArray.map((entity) => <Card data={entity} />)
         )}
      </main>
   );
}

// Добавить анимацию исчезновения - появления карточек
