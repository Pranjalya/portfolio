import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from './contexts/PortfolioContext';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const user = {
    name: 'PRANJALYA TIWARI',
    description:
      'Deep Learning, Data Engineering, Full Stack Development, Open Source Contribution',
  };

  useEffect(() => {
    document.body.classList.add('loading');
    // Simulate loading data
    Promise.all([]).then(() => {
      setIsLoaded(true);
      document.body.classList.remove('loading');
    });
  }, []);

  return (
    <PortfolioProvider>
      <div className="wrapper">
        {isLoaded ? (
          <>
            <FrontPage user={user} />
            <AboutMe user={user} />
            <Experience />
            <Portfolio />
            <Contacts />
            <Footer />
          </>
        ) : (
          <div className="loader wrapper">
            <div className="spinner-loader"></div>
          </div>
        )}
      </div>
    </PortfolioProvider>
  );
};

export default App;