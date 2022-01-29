import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import useAriseTransition from '../../hooks/useAriseTransition';
import AriseTransition, {
   transitionTypes,
} from '../AriseTransition/AriseTransition';
import './Contacts.scss';

export default function Contacts() {
   const fire = useAriseTransition();

   return (
      <div className="Contacts">
         <AriseTransition
            fire={fire}
            transitionType={transitionTypes.FROM_RIGHT}
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
         </AriseTransition>
         <AriseTransition
            fire={fire}
            transitionType={transitionTypes.FROM_RIGHT}
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
         </AriseTransition>
         <AriseTransition
            fire={fire}
            transitionType={transitionTypes.FROM_RIGHT}
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
         </AriseTransition>
      </div>
   );
}
