import Shelf from '../components/Shelf';
import { Link } from 'react-router-dom';
import { Container, Box, Button } from '@mui/material';
import NavBar from '../components/NavBar';

export default function Library() {
    return (
        <Container>
            <NavBar />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', "@media (max-width: 768px)": {
            
            marginLeft: '1.5rem'
          }, }}>
                <h1 style={{ color: 'black' }}>Library</h1>
                <Link to="/library/newshelf" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '190px',
                            height: '50px',
                            backgroundColor: '#593122',
                            marginRight: '105px',
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: '#A6633C',
                            },
                            "@media (max-width: 768px)": {
            
                                marginLeft: '7rem'
                              },
                        }}
                    >
                        Add a Shelf
                    </Button>
                </Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginTop: '2rem',
                    flexDirection: "row", // Default flexDirection: 'row', updated for small screens
          "@media (max-width: 768px)": {
            flexDirection: "column", // Change to 'column' on smaller screens
            marginLeft: '1.5rem',
          },
                }}
            >
                <Box sx={{ flex: '0 0 calc(50% - 1rem)', marginBottom: '2rem', width: '48%' }}>
                    <Shelf shelfName="Want To Read" shelfId="1" />
                </Box>
                <Box sx={{ flex: '0 0 calc(50% - 1rem)', marginBottom: '2rem', width: '48%' }}>
                    <Shelf shelfName="Did Not Finish" shelfId="2" />
                </Box>
                <Box sx={{ flex: '0 0 calc(50% - 1rem)', marginBottom: '2rem', width: '48%',  }}>
                    <Shelf shelfName="To Be Read" shelfId="3" />
                </Box>
                <Box sx={{ flex: '0 0 calc(50% - 1rem)', marginBottom: '2rem', width: '48%' }}>
                    <Shelf shelfName="Reading" shelfId="4" />
                </Box>
            </Box>
        </Container>
    );
}
