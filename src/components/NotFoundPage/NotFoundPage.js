import usePageTitle from '../../hooks/usePageTitle';
import ServicePage from '../ServicePage/ServicePage';
import { AiOutlineDisconnect } from 'react-icons/ai';

export default function NotFoundPage() {
   usePageTitle('Breaking Bad - 404 Not found');

   return (
      <ServicePage
         title="Page not found"
         icon={<AiOutlineDisconnect />}
         text="The page you requested does not exist."
         homelink
      />
   );
}
