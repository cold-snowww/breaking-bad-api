import { useEffect, useState } from 'react';

export default function useAriseTransition() {
   const [shown, setShown] = useState(false);
   useEffect(() => {
      setShown((shown) => true);
   }, []);
   return shown;
}
