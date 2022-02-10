import PropTypes from 'prop-types';
import DataCard from './DataCard';
import { BsPersonBoundingBox } from 'react-icons/bs';

export default function CharacterDataCard({ data }) {
   return (
      <DataCard title={data.name} icon={<BsPersonBoundingBox />}>
         <div className="DataCard__image">
            <img src={data.img} alt={data.name} />
         </div>
         <div class="DataCard__info">
            <div class="DataCard__field">Nickname:</div>
            <div class="DataCard__value">{data.nickname}</div>
            <div class="DataCard__field">Birthday:</div>
            <div class="DataCard__value">{data.birthday}</div>
            <div class="DataCard__field">Аctor:</div>
            <div class="DataCard__value">{data.portrayed}</div>
            <div class="DataCard__field">Status:</div>
            <div class="DataCard__value">{data.status}</div>
            <div class="DataCard__field">Occupation:</div>
            <div class="DataCard__value">
               <ul class="DataCard__valueList">
                  {data.occupation.map((val) => (
                     <li>{val}</li>
                  ))}
               </ul>
            </div>
         </div>
      </DataCard>
   );
}

CharacterDataCard.propTypes = {
   data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
      nickname: PropTypes.string,
      birthday: PropTypes.string,
      portrayed: PropTypes.string,
      status: PropTypes.string,
      occupation: PropTypes.arrayOf(PropTypes.string),
   }),
};
