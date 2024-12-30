import React, { createContext, useState } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const user = {
    name: 'PRANJALYA TIWARI',
    description:
      'Deep Learning, Data Engineering, Full Stack Development, Open Source Contribution',
  };

  // You can fetch data here if needed, similar to the Vue created() lifecycle method.

  return (
    <PortfolioContext.Provider value={{ isLoaded, user }}>
      {children}
    </PortfolioContext.Provider>
  );
};