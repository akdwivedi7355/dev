import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");

  const value = {
    activeSection,
    setActiveSection,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
