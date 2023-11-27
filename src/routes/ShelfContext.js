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
    console.log(`Adding book to shelfId: ${shelfId}`);
    
    // Clone the shelves state to avoid directly mutating state
    const updatedShelves = shelves.map(shelf => {
        if (shelf.id === parseInt(shelfId)) {
            // Ensure shelf.books is an array; if it doesn't exist, create a new array
            const updatedBooks = shelf.books ? [...shelf.books, book] : [book];
            // Update the shelf with the updated book list
            return { ...shelf, books: updatedBooks };
        }
        if (shelf.books && shelf.books.find(b => b.id === book.id)) {
            // If the book exists in another shelf, remove it
            const filteredBooks = shelf.books.filter(b => b.id !== book.id);
            return { ...shelf, books: filteredBooks };
        }
        return shelf;
    });

    // Log the updated shelves for debugging
    console.log("Updated shelves after adding/removing book:", updatedShelves);

    // Set the updated shelves state
    setShelves(updatedShelves);
};

const removeBookFromShelf = (shelfId, bookIndex) => {
  setShelves(shelves.map(shelf => {
      if (shelf.id === shelfId) {
          const updatedBooks = shelf.books.filter((_, index) => index !== bookIndex);
          // Log the removed book for debugging
          console.log("Removed book:", shelf.books[bookIndex]);
          return { ...shelf, books: updatedBooks };
      }
      return shelf;
  }));
};

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

