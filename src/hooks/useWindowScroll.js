import { useEffect, useState } from 'react';

export default function useWindowScroll() {
   // Current scroll percentage
   const [scrolled, setScrolled] = useState(0);
   // Add / remove listeners
   useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   }, []);
   // Function called on document body scrolling
   function onScroll() {
      const scrolled = window.pageYOffset;
      const { scrollHeight, clientHeight } = document.documentElement;
      const persentage = (scrolled * 100) / (scrollHeight - clientHeight);
      setScrolled(persentage);
   }

   // Current scrolled percentage
   return scrolled;
}
