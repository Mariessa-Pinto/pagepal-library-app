import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Divider, Container } from '@mui/material';
import { useShelf } from './ShelfContext';
import AddBookCardShelf from '../components/BookCardShelf';
import NavBar from '../components/NavBar';

export default function Shelf() {
  const { setEditingShelfId, shelves, addBookToShelf } = useShelf();
  const { shelfId } = useParams();

  // Find the shelf that matches the given shelfId
  const currentShelf = shelves.find(shelf => shelf.id === parseInt(shelfId));

  // Check if the current shelf exists and extract its name
  const shelfName = currentShelf ? currentShelf.name : 'Shelf Not Found';

  const handleEditShelf = () => {
    setEditingShelfId(shelfId);
  }
  console.log(shelves)
  console.log(shelfName)

  const handleAddBookToShelf = (book, shelfId) => {
    // Find the shelf with the specified shelfId
    const selectedShelf = shelves.find(shelf => shelf.id === parseInt(shelfId));

    // Check if the shelf exists
    if (selectedShelf) {
      // Add the book to the selected shelf
      addBookToShelf(selectedShelf.id, book);
    } else {
      // Handle the case where the shelf is not found
      console.error(`Shelf with id ${shelfId} not found.`);
    }
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Container>
        <NavBar />
        <Box sx={{ backgroundColor: 'white' }}>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              paddingBottom: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              "@media (max-width: 768px)": {
              },
            }}
          >
            <h1>{shelfName}</h1>
            <Link to={{
              pathname: `/library/shelf/${shelfId}/editshelf`,
              state: { shelfId },
            }}
              style={{ textDecoration: 'none', color: '#000' }}>
              <Button
                onClick={handleEditShelf}
                variant="contained"
                sx={{
                  width: '190px',
                  height: '40px',
                  backgroundColor: '#593122',
                  marginRight: '105px',
                  '&:hover, &.Mui-focusVisible': {
                    backgroundColor: '#A6633C',
                  },
                  "@media (max-width: 768px)": {
                    marginRight: '20px',
                  },
                }}
              >
                Edit Shelf
              </Button>
            </Link>
          </Box>
          <Divider sx={{ height: 4, width: '85%', backgroundColor: '#8697A6', borderRadius: 5, marginBottom: '0.5rem' }} />
          <Box>
            <AddBookCardShelf
              shelfId={shelfId}
            />
          </Box>
          <Box
            sx={{
              position: 'sticky',
              bottom: '5rem',
              right: '20rem',
              zIndex: 1,
              width: 300,
              "@media (max-width: 768px)": {
                bottom: '-30rem',
              },
            }}
          >
            <Box>
              <Link to={`/library/shelf/${shelfId}/addbook`} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    width: '190px',
                    height: '40px',
                    marginLeft: '65rem',
                    backgroundColor: '#593122',
                    '&:hover, &.Mui-focusVisible': {
                      backgroundColor: '#A6633C',
                    },
                  }}
                >
                  Add A Book
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>

  );
}
