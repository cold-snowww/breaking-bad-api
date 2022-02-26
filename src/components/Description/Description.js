import AriseAnimation, {
   animationTypes,
} from '../AriseAnimation/AriseAnimation';
import PropTypes from 'prop-types';
import './Description.scss';

export default function Description({ fire }) {
   return (
      <AriseAnimation
         fire={fire}
         animationType={animationTypes.FROM_LEFT}
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
      </AriseAnimation>
   );
}

Description.propTypes = {
   fire: PropTypes.bool.isRequired,
};
