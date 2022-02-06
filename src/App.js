import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DataPage from './components/DataPage/DataPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { dataTypes } from './redux/common';

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
               path="/character"
               element={<DataPage dataType={dataTypes.CHARACTER} />}
            />
            <Route
               path="/episode"
               element={<DataPage dataType={dataTypes.EPISODE} />}
            />
            <Route
               path="/quote"
               element={<DataPage dataType={dataTypes.QUOTE} />}
            />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </HashRouter>
   );
}

export default App;
