import Shelf from '../components/Shelf'

import { Link } from "react-router-dom"
import { Container, Box, Button } from "@mui/material";

import NavBar from "../components/NavBar"

export default function Library() {
    return (
        <Container>
            <NavBar />
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <h1 style={{ color: 'black' }}>Library</h1>
                <Link
                    to="/library/newshelf"
                    style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '190px',
                            height: '50px',
                            backgroundColor: '#593122',
                            marginRight: '105px',
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: '#A6633C',}
                        }}
                    >
                    Add a Shelf
                    </Button>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: '-2rem' }}>
                <Box sx={{ flex: 2, margin: '2rem' }}>
                    <Shelf shelfName="Want To Read" shelfId="1"/>
                </Box>
                <Box sx={{ flex: 2, margin: '2rem'  }}>
                    <Shelf shelfName="Did Not Finish" shelfId="2" />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: '-2rem', marginTop: '1rem' }}>
                <Box sx={{ flex: 2, margin: '2rem'  }}>
                    <Shelf shelfName="To Be Read" shelfId="3" />
                </Box>
                <Box sx={{ flex: 2, margin: '2rem'  }}>
                    <Shelf shelfName="Reading" shelfId="4" />
                </Box>
            </Box>
        </Container>
    )
}
