import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, Container } from '@mui/material';
import { useShelf } from './ShelfContext';
import AddBookCardShelf from '../components/BookCardShelf';
import NavBar from '../components/NavBar';

export default function Shelf({ shelfId }) {
  const { setEditingShelfId, shelves } = useShelf();

  // const shelf = shelves.find(shelf => shelf.id === shelfId);

  const handleEditShelf = () => {
    setEditingShelfId(shelfId);
  }

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
            {shelves.map((shelf) => (
              <h1 style={{ color: 'black', margin: 0, paddingBottom: 10 }}>{shelf.name}</h1>
            ))}
            <Link to={{ pathname: `/library/shelf/${shelfId}/editshelf`,  
            state: { shelfId }, }} 
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
