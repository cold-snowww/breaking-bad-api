import { useState } from 'react';

export default function useElementScroll() {
   const [scrolled, setScrolled] = useState(0);

   function onScroll(event) {
      const { scrollTop, scrollHeight, clientHeight } = event.target;
      const percentage = (scrollTop * 100) / (scrollHeight - clientHeight);
      setScrolled(percentage);
   }
   // 0 - current scrolled percentage
   // 1 - function, called on element scroll event
   return [scrolled, onScroll];
}
