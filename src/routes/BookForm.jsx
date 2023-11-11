import { Link } from "react-router-dom"
import { Container, Box, Button } from "@mui/material";

import AddBookCard from "../components/AddBookCard";
import Logo from '../assets/logo.svg';

export default function BookForm() {
    return (
        <Container>
            <Link to={`/library/shelf/1`} style={{textDecoration: 'none'}}>
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.25rem'
                }}>
                    <img
                        src={Logo}
                        alt='logo'
                        width={68}
                        height={68}
                    />
                    <h3 style={{ fontSize: '24px', color: 'black'}}>Back</h3>
                </div>
            </Link>
            <Box>
                <AddBookCard
                    bookName="The Name of The Wind (The Kingkiuller Chronicle, #1)"
                    bookAuthor="Patrick Rothfuss"
                    description="Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. 
                    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
                    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard."
                    shelfId="1"
                />
            </Box>
        </Container>
    )
}
