import { Link, useParams } from "react-router-dom";
import { Container, Box, Button, TextField } from "@mui/material";
import Arrow from '../assets/leftArrow.svg';
import { useShelf } from './ShelfContext';
import { useState, useEffect } from "react";


export default function EditShelf() {
  const { shelves, updateShelf } = useShelf();
  const { shelfId } = useParams();

  const currentShelf = shelves.find(shelf => shelf.id === parseInt(shelfId));

  const [editShelfName, setEditShelfName] = useState('');

  useEffect(() => {
    if (currentShelf) {
      setEditShelfName(currentShelf.name || '');
    }
  }, [currentShelf]);

  const handleEditShelf = () => {
    const trimmedShelfName = editShelfName.trim();
    if (trimmedShelfName !== '' && shelfId && currentShelf) {
      const updatedShelf = { ...currentShelf, name: trimmedShelfName };
      updateShelf(updatedShelf);
      setEditShelfName(''); // Reset input field after update if needed
    }
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Container>
        <Link to={`/library/shelf/${shelfId}`} style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <img
              src={Arrow}
              alt='logo'
              width={40}
              height={40}
            />
            <h3 style={{ fontSize: '24px', color: 'black' }}>Back</h3>
          </div>
        </Link>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <p style={{ color: 'black', fontSize: 32, fontWeight: 'bold', marginTop: '5rem' }}>Edit Shelf Name</p>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <p style={{ color: 'black', fontSize: 18 }}>Shelf Name</p>
            <TextField
              id="outlined-basic"
              // label="Enter New Shelf Name"
              variant="outlined"
              sx={{
                width: 358,
                '& label.Mui-focused': {
                  color: '#593122',
                },
                '& label': {
                  color: '#593122',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#593122',
                  },
                  '&:hover fieldset': {
                    borderColor: '#593122',
                    borderWidth: '0.15rem',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#593122',
                  },
                },
              }}
              size="small"
              value={editShelfName}
              onChange={(e) => setEditShelfName(e.target.value)}
            />
          </Box>
          <Link to={`/library/shelf/${shelfId}`} style={{ textDecoration: 'none' }}>
            <Button
              onClick={handleEditShelf}
              variant="contained"
              sx={{
                width: '270.19px',
                height: '50px',
                backgroundColor: '#593122',
                marginTop: '3rem',
                '&:hover, &.Mui-focusVisible': {
                  backgroundColor: '#A6633C',
                },
              }}
            >
              Save Edited Name
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
