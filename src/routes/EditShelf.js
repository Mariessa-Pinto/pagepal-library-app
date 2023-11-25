import { Link, useLocation } from "react-router-dom";
import { Container, Box, Button, TextField } from "@mui/material";
import Arrow from '../assets/leftArrow.svg';
import { useShelf } from './ShelfContext';
import { useState, useEffect } from "react";


export default function EditShelf() {
  const location = useLocation();
  const editingShelfId = location.state?.shelfId;
  const [editShelfName, setEditShelfName] = useState('');
  const { shelves, updateShelf } = useShelf();


  useEffect(() => {
    if(editingShelfId !== null) {
        const foundShelf = shelves.find(shelf => shelf.id === editingShelfId);
        if(foundShelf) {
        setEditShelfName(foundShelf.name);
        } else {
            console.error("shelf id is undefined")
            console.log("Editing Shelf ID:", editingShelfId);
        }
    }
  }, [shelves, editingShelfId]);

  const handleEditShelf = () => {
    const trimmedShelfName = editShelfName.trim();
    console.log("Editing Shelf ID:", editingShelfId);
    if (trimmedShelfName !== '' && editingShelfId != null) {
      updateShelf({ id: editingShelfId, name: trimmedShelfName });
      setEditShelfName('');
    }
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Container>
        <Link to={`/library`} style={{ textDecoration: 'none' }}>
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
          <p style={{ color: 'black', fontSize: 32, fontWeight: 'bold', marginTop: '5rem' }}>Edit Shelf</p>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <p style={{ color: 'black', fontSize: 18 }}>Edit Shelf Name</p>
            <TextField
              id="outlined-basic"
              label="Enter New Shelf Name"
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
          <Link to="/library" style={{ textDecoration: 'none' }}>
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
