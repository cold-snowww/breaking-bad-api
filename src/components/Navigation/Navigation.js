import { useInView } from 'react-intersection-observer';
import NavigationLink from '../NavigationLink/NavigationLink';
import { BsPersonBoundingBox, BsChatLeftDots } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import './Navigation.scss';
import AriseAnimation, {
   animationTypes,
} from '../AriseAnimation/AriseAnimation';

export default function Navigation() {
   const [ref, inView] = useInView({
      threshold: 1,
      // triggerOnce: true,
   });
   return (
      <nav className="Navigation" ref={ref}>
         <AriseAnimation
            fire={inView}
            className="Navigation__linkWrapper"
            transitionType={animationTypes.FROM_LEFT}
            delay={300}
            duration={400}
         >
            <NavigationLink
               url="/characters"
               title="Characters"
               icon={<BsPersonBoundingBox />}
               text="Find out more about characters of your favorite TV series."
            />
         </AriseAnimation>
         <AriseAnimation
            fire={inView}
            className="Navigation__linkWrapper"
            transitionType={animationTypes.FROM_LEFT}
            delay={400}
            duration={400}
         >
            <NavigationLink
               url="/episodes"
               title="Episodes"
               icon={<BiMoviePlay />}
               text="Season's episodes and release dates, characters of the episode."
            />
         </AriseAnimation>
         <AriseAnimation
            fire={inView}
            className="Navigation__linkWrapper"
            transitionType={animationTypes.FROM_LEFT}
            delay={500}
            duration={400}
         >
            <NavigationLink
               url="/quotes"
               title="Quotes"
               icon={<BsChatLeftDots />}
               text="Great and unforgettable quotes from your favorite characters."
            />
         </AriseAnimation>
      </nav>
   );
}
