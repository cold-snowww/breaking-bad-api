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
      console.log('Loaded: false!');
   }, [data.name]);
   // Start card animation
   useEffect(() => {
      if (imageLoaded) {
         console.log('Animation!');
      }
   }, [imageLoaded]);

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
            <div className="CharacterDataCard__imageLoader">
               <div className="CharacterDataCard__spinner">
                  <Spinner type={12} />
               </div>
               <p className="CharacterDataCard__imageLoaderText">
                  Loading image
               </p>
            </div>
         </div>
         <div className="DataCard__info">
            <div className="DataCard__field">Nickname:</div>
            <div className="DataCard__value">{data.nickname}</div>
            <div className="DataCard__field">Birthday:</div>
            <div className="DataCard__value">{data.birthday}</div>
            <div className="DataCard__field">Аctor:</div>
            <div className="DataCard__value">{data.portrayed}</div>
            <div className="DataCard__field">Status:</div>
            <div className="DataCard__value">{data.status}</div>
            <div className="DataCard__field">Occupation:</div>
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
