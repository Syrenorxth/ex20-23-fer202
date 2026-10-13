import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import NavigationMenu from './NavigationMenu';

const App = () => {
  return (
    <Router basename="/ex20">
      <div>
        <NavigationMenu />
        <div className="page">
          <Routes>
            {renderRoutes()}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
