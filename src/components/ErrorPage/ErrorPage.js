import ServicePage from '../ServicePage/ServicePage';
import { AiOutlineBug } from 'react-icons/ai';
import usePageTitle from '../../hooks/usePageTitle';

export default function ErrorPage({ homelink }) {
   usePageTitle('Breaking Bad - Error');

   return (
      <ServicePage
         title="Error"
         icon={<AiOutlineBug />}
         text={
            <span>
               Something went wrong. Please, try refresh the page, or go to
               homepage, if it's doesn't help, we're sorry...
               <br /> We will fix it soon!
            </span>
         }
         homelink={homelink}
      />
   );
}
