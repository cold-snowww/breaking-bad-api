import DataCard from '../DataCard';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import './EmptyDataCard.scss';

export default function EmptyDataCard() {
   return (
      <DataCard title="Tip..." icon={<MdOutlineTipsAndUpdates />}>
         <p className="EmptyDataCard__text">
            To display data, use filters in the menu. Here you can find out more
            about one of the best TV series ever!
         </p>
      </DataCard>
   );
}
