import { Link } from 'react-router-dom';
import useAriseTransition from '../../hooks/useAriseTransition';
import AriseTransition, {
   transitionTypes,
} from '../AriseTransition/AriseTransition';
import './Header.scss';

export default function Header() {
   const fire = useAriseTransition();

   return (
      <AriseTransition
         fire={fire}
         duration={300}
         delay={200}
         transitionType={transitionTypes.FROM_TOP}
      >
         <header className="Header">
            <Link to="/">
               <div className="Header__titleVisible" aria-hidden>
                  <p className="Header__text">
                     <span className="Header__symbolWrapper">
                        <span className="Header__symbol">5</span>
                     </span>
                     <span className="Header__wordPart">eaking</span>
                     <span className="Header__symbolWrapper">
                        <span className="Header__symbol">6</span>
                     </span>
                     <span className="Header__wordPart">d</span>
                  </p>
               </div>
            </Link>
            <h1 className="Header__titleHidden">Breaking Bad</h1>
         </header>
      </AriseTransition>
   );
}
