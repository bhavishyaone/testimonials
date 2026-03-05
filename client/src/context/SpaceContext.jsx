import { createContext, useState, useContext } from "react";

export const SpaceContext = createContext();

export const useSpace = () => useContext(SpaceContext);

export const SpaceProvider = ({ children }) => {
  const [activeSpace, setActiveSpace] = useState(() => {
    try {
      const stored = localStorage.getItem("activeSpace");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const selectSpace = (space) => {
    localStorage.setItem("activeSpace", JSON.stringify(space));
    setActiveSpace(space);
  };

  const clearSpace = () => {
    localStorage.removeItem("activeSpace");
    setActiveSpace(null);
  };

  return (
    <SpaceContext.Provider value={{ activeSpace, selectSpace, clearSpace }}>
      {children}
    </SpaceContext.Provider>
  );
};
