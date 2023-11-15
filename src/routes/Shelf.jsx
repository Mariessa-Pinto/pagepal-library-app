import React from 'react';
import { Link} from 'react-router-dom';
import { Box, Button, Divider, Container } from '@mui/material';

import AddBookCardShelf from '../components/BookCardShelf';
import NavBar from '../components/NavBar';

export default function Shelf({ shelfName, shelfId}) {
 
  return (
  
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
    <Container>
        <NavBar/>
        <h1 style={{ color: 'black', margin: 0, paddingBottom: 10 }}>{shelfName}</h1>
      <Box sx={{ backgroundColor: 'white' }}>
   
        <Link to={`/library`} style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', }}>
        
          </div>
        </Link>
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
      
          <h1 style={{ color: 'black', margin: 0, paddingBottom: 10 }}>{shelfName}</h1>
          <Link to={`/library/newshelf`} style={{ textDecoration: 'none', color: '#000' }}>
            <Button
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
        <Divider sx={{ height: 4, width: '85%', backgroundColor: '#8697A6', borderRadius: 5,}} />
        <Box>
          <AddBookCardShelf
            bookName="The Name of The Wind (The Kingkiller Chronicle, #1)"
            bookAuthor="Patrick Rothfuss"
            description="Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. 
            The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
            A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard."
            shelfId={shelfId}
          />
          <Divider sx={{ height: 2, width: '75%', backgroundColor: '#8697A6', borderRadius: 5 }} />
          <AddBookCardShelf
            bookName="The Name of The Wind (The Kingkiller Chronicle, #1)"
            bookAuthor="Patrick Rothfuss"
            description="Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. 
            The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
            A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard."
            shelfId={shelfId}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '0.5rem',
            bottom: '5rem',
            "@media (max-width: 768px)": {
              bottom: '-30rem',
            },
          }}
        >  
        <Box sx={{alignItems: 'baseline'}}>
          <Link to={`/library/shelf/${shelfId}/addbook`} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                width: '190px',
                height: '40px',
                backgroundColor: '#593122',
                marginRight: '95px',
                '&:hover, &.Mui-focusVisible': {
                  backgroundColor: '#A6633C',
                  marginTop: '175px',
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
