import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import AriseAnimation, {
   animationTypes,
} from '../AriseAnimation/AriseAnimation';
import PropTypes from 'prop-types';
import './Contacts.scss';

export default function Contacts({ fire, className, fixed }) {
   return (
      <div className={className ? `Contacts ${className}` : 'Contacts'}>
         <AriseAnimation
            fire={fire}
            transitionType={animationTypes.FROM_RIGHT}
            fixed={fixed}
            duration={300}
            delay={300}
         >
            <a
               className="Contacts__contactLink"
               href="https://github.com/smtexx"
               target="_blank"
               rel="noopener noreferrer"
            >
               <AiOutlineGithub />
            </a>
         </AriseAnimation>
         <AriseAnimation
            fire={fire}
            transitionType={animationTypes.FROM_RIGHT}
            fixed={fixed}
            duration={300}
            delay={400}
         >
            <a
               className="Contacts__contactLink"
               href="https://t.me/smtexx"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaTelegram />
            </a>
         </AriseAnimation>
         <AriseAnimation
            fire={fire}
            transitionType={animationTypes.FROM_RIGHT}
            fixed={fixed}
            duration={300}
            delay={500}
         >
            <a
               className="Contacts__contactLink"
               href="mailto:smtexx@hotmail.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <AiOutlineMail />
            </a>
         </AriseAnimation>
      </div>
   );
}

Contacts.propTypes = {
   fire: PropTypes.bool.isRequired,
};
