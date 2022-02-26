import PropTypes from 'prop-types';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { useEffect } from 'react';
import { useState } from 'react';
import DataCard from '../DataCard';
import Spinner from '../../Spinner/Spinner';
import './CharacterDataCard.scss';

export default function CharacterDataCard({ data }) {
   const [imageLoaded, setimageLoaded] = useState(false);

   // Reset imgLoaded when card changes
   useEffect(() => {
      setimageLoaded(false);
   }, [data.name]);

   return (
      <DataCard title={data.name} icon={<BsPersonBoundingBox />}>
         <div className="CharacterDataCard__image">
            <div className="CharacterDataCard__imageFiller"></div>
            <img
               className="CharacterDataCard__image"
               src={data.img}
               alt={data.name}
               onLoad={() => setimageLoaded(true)}
            />
            <div
               className={`CharacterDataCard__imageLoader${
                  imageLoaded ? ' hidden' : ''
               }`}
            >
               <div className="CharacterDataCard__spinner">
                  <Spinner type={12} />
               </div>
               <p className="CharacterDataCard__imageLoaderText">
                  Loading image
               </p>
            </div>
         </div>
         <div className="DataCard__info">
            <p className="DataCard__field">Nickname:</p>
            <p className="DataCard__value">{data.nickname}</p>
            <p className="DataCard__field">Birthday:</p>
            <p className="DataCard__value">{data.birthday}</p>
            <p className="DataCard__field">Аctor:</p>
            <p className="DataCard__value">{data.portrayed}</p>
            <p className="DataCard__field">Status:</p>
            <p className="DataCard__value">{data.status}</p>
            <p className="DataCard__field">Occupation:</p>
            <div className="DataCard__value">
               <ul className="DataCard__valueList">
                  {data.occupation.map((val) => (
                     <li key={val}>{val}</li>
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
