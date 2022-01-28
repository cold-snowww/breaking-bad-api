import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </HashRouter>
   );
}

export default App;
