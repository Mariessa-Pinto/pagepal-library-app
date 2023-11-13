import { Link } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";

import HomeBooks from '../assets/homePageBooks.svg'

export default function Home() {
    return (
        <Container style={{ display: 'flex', flexDirection: 'row' }}>
            <Box
                sx={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ color: 'black', fontSize: 96, fontWeight: 'bold', marginTop: '10rem' }}>PagePal</h1>
                <p style={{ color: 'black', fontSize: 20, fontWeight: 'medium', width: '25em' }}>Welcome to PagePal, your digital haven for book lovers and avid readers alike. Just like the cozy shelves of a physical library, our platform offers a virtual sanctuary where you can organize, explore, and cherish your literary treasures. With the power of Google API integration, you can effortlessly add and remove books, create custom bookshelves, and embark on a journey to curate your own digital library. Whether you're a dedicated bookworm, a casual reader, or a collector of knowledge, PagePal is here to make managing your personal library an enjoyable and seamless experience.</p>
                <Link
                    to="/library"
                    style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '16.887rem',
                            height: '3.125rem',
                            backgroundColor: '#593122',
                            marginRight: '6.563px',
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: '#A6633C',
                            },
                            marginTop: '3rem'
                        }}
                    >
                        Your Library
                    </Button>
                </Link>
            </Box>
            <img
                src={HomeBooks}
                alt='books on shelf'
                style={{ height: '100vh', width: 'auto', marginLeft: '11rem', maxWidth: '100%' }}
            />
        </Container>
    );
}
