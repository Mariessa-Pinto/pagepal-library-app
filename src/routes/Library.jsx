import styles from './Library.module.css'
import Shelf from '../components/Shelf'

import { Link } from "react-router-dom"
import { Container, Box, Button } from "@mui/material";

import NavBar from "../components/NavBar"

export default function Library() {
    return (
        <Container>
            <NavBar />
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ flex: 2 }}>
                    <Shelf shelfName="Want to read" />
                </Box>
                <Box sx={{ flex: 2 }}>
                    <Shelf shelfName="Want to read" />
                </Box>
            </Container>
            <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ flex: 2 }}>
                    <Shelf shelfName="Want to read" />
                </Box>
                <Box sx={{ flex: 2 }}>
                    <Shelf shelfName="Want to read" />
                </Box>
            </Container>
        </Container>
    )
}
