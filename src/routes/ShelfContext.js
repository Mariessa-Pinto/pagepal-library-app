// ShelfContext.js
import React, { createContext, useContext, useState } from 'react';

const ShelfContext = createContext();

const ShelfProvider = ({ children }) => {
  const [shelves, setShelves] = useState([]);

  const addShelf = (shelf) => {
    setShelves([...shelves, { ...shelf, id: shelves.length + 1 }]);
  };

  const value = {
    shelves,
    addShelf,
  };

  return <ShelfContext.Provider value={value}>{children}</ShelfContext.Provider>;
};

const useShelf = () => {
  const context = useContext(ShelfContext);
  if (!context) {
    throw new Error('useShelf must be used within a ShelfProvider');
  }
  return context;
};

export { ShelfProvider, useShelf };

