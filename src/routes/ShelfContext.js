// ShelfContext.js
import React, { createContext, useContext, useState } from 'react';

const ShelfContext = createContext();

const ShelfProvider = ({ children }) => {
  const [shelves, setShelves] = useState([]);
  const [editingShelfId, setEditingShelfId] = useState(null);

  const addShelf = (shelf) => {
    setShelves([...shelves, { ...shelf, id: shelves.length + 1 }]);
  };


  const updateShelf = (updatedShelf) => {
    const newShelves = shelves.map(shelf => shelf.id === updatedShelf.id ? {...shelf, name: updatedShelf.name } : shelf);
    console.log("Updated shelves:", newShelves);
    setShelves(newShelves);
  }

  const addBookToShelf = (shelfId, book) => {
    setShelves((prevShelves) => {
      return prevShelves.map((shelf) => {
        if (shelf.id === shelfId) {
          const updatedBooks = shelf.books ? [...shelf.books, book] : [book];
          return { ...shelf, books: updatedBooks };
        }
        return shelf;
      });
    });
  };

  const removeBookFromShelf = (shelfId, bookIndex) => {
    setShelves(shelves.map(shelf => {
      if (shelf.id === shelfId) {
        return {
          ...shelf,
          books: shelf.books.filter((_, index) => index !== bookIndex)
        };
      }
      return shelf;
    }))
  }

  const value = {
    shelves,
    addShelf,
    updateShelf,
    editingShelfId,
    setEditingShelfId,
    addBookToShelf,
    removeBookFromShelf
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

