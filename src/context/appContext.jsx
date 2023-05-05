import { createContext, useContext, useState } from "react";

// creating context
export const AppContext = createContext(null);

// context provider
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const valueProvider = {
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={valueProvider}>{children}</AppContext.Provider>
  );
};

// function for using context
export const useAppContext = () => {
  return useContext(AppContext);
};

export default ContextProvider;
