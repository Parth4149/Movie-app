import { useContext, createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  console.log('Context');
  const [demo, setDemo] = useState('Parth');

  return (
    <AppContext.Provider value={demo}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
