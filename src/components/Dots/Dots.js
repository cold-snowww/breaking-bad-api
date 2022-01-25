import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Dots({ dots = 3, interval = 500 }) {
   const [qty, setQty] = useState(1);

   useEffect(() => {
      const timerId = setInterval(() => {
         const newQty = qty + 1;
         setQty(newQty > dots ? 1 : newQty);
      }, interval);

      return () => clearInterval(timerId);
   }, [interval, dots, qty]);

   return <span>{'.'.repeat(qty)}</span>;
}

Dots.propTypes = {
   dots: PropTypes.number,
   interval: PropTypes.number,
};
