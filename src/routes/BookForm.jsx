import { Link } from "react-router-dom"
import { Container, Box, Button, FormControlLabel, Checkbox, TextField, Divider } from "@mui/material";

import AddBookCard from "../components/AddBookCard";
import Arrow from '../assets/leftArrow.svg';

export default function BookForm() {
    return (
        <Container>
            <Link to={`/library/shelf/1`} style={{ textDecoration: 'none' }}>
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
            <h1 style={{ color: 'black', margin: 0, paddingBottom: 10 }}>Add A Book</h1>
            <Box>
                <Box sx={{ display: 'flex', gap: 3, paddingBottom: 1 }}>
                    <TextField
                        id="outlined-basic"
                        label="Search by Title or Author"
                        variant="outlined"
                        sx={{
                            width: 610,
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
                            }
                        }}
                        size="small"
                    />
                    <Button
                        variant="contained"
                        sx={{
                            width: '190px',
                            height: '40px',
                            backgroundColor: '#593122',
                            marginRight: '105px',
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: '#A6633C',
                            }
                        }}
                    >
                        Search
                    </Button>
                </Box>
                <Box sx={{ paddingBottom: 1 }}>
                    <FormControlLabel control={<Checkbox sx={{
                        color: '#593122',
                        '&.Mui-checked': {
                            color: '#593122',
                        },
                    }} />} label="all" />
                    <FormControlLabel control={<Checkbox sx={{
                        color: '#593122',
                        '&.Mui-checked': {
                            color: '#593122',
                        },
                    }} />} label="title" />
                    <FormControlLabel control={<Checkbox sx={{
                        color: '#593122',
                        '&.Mui-checked': {
                            color: '#593122',
                        },
                    }} />} label="author" />
                </Box>
            </Box>
            <Divider sx={{ height: 4, width: 820, backgroundColor: '#8697A6', borderRadius: 5 }} />
            <Box>
                <AddBookCard
                    bookName="The Name of The Wind (The Kingkiuller Chronicle, #1)"
                    bookAuthor="Patrick Rothfuss"
                    description="Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. 
                    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
                    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard."
                    shelfId="1"
                />
                <Divider sx={{ height: 2, width: 820, backgroundColor: '#8697A6', borderRadius: 5 }} />
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
