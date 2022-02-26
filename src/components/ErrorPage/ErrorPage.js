import ServicePage from '../ServicePage/ServicePage';
import { AiOutlineBug } from 'react-icons/ai';
import usePageTitle from '../../hooks/usePageTitle';
import PropTypes from 'prop-types';

export default function ErrorPage({ homelink, error }) {
   usePageTitle('Breaking Bad - Error');

   return (
      <ServicePage
         title="Error"
         icon={<AiOutlineBug />}
         text={
            <>
               <span>
                  Something went wrong. Please, try refresh the page, or go to
                  homepage, if it's doesn't help, we're sorry. We will fix it
                  soon!
               </span>
               <br />
               {error ? (
                  <span className="ServicePage__error">
                     Error: {error.message}
                  </span>
               ) : null}
            </>
         }
         homelink={homelink}
      />
   );
}

ErrorPage.propTypes = {
   homelink: PropTypes.bool,
   error: PropTypes.instanceOf(Error),
};
