import useAriseTransition from '../../hooks/useAriseTransition';
import AriseTransition, {
   transitionTypes,
} from '../AriseTransition/AriseTransition';
import './Description.scss';

export default function Description() {
   const fire = useAriseTransition();

   return (
      <AriseTransition
         fire={fire}
         transitionType={transitionTypes.FROM_LEFT}
         delay={600}
         duration={300}
      >
         <main className="Description">
            <div className="Description__message">
               <p className="Description__text">
                  Welcome to the Breaking Bad app, here you can read more about
                  one of the best TV series in the history of cinema - heroes,
                  actors, quotes. Enjoy!
               </p>
               <p className="Description__text">
                  For better user experience, view the app on your smartphone!
               </p>
            </div>
         </main>
      </AriseTransition>
   );
}
