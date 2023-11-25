import { Link } from "react-router-dom"
import { Container, Box, Button, FormControlLabel, Checkbox, TextField, Divider } from "@mui/material";
import AddBookCard from "../components/AddBookCard";
import Arrow from '../assets/leftArrow.svg';
import { useState } from 'react'
import SearchBooks from "../components/BooksApi";
import { useShelf } from "./ShelfContext";

export default function BookForm() {
    const [searchTerm, setSearchTerm] = useState('');
    const [inputValue, setInputValue] = useState('');

    const { addBookToShelf } = useShelf();


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSearch = () => {
        setSearchTerm(inputValue);
    };
 
    const handleAddBookToShelf = (book) => {
        const shelfId = 1;
        addBookToShelf(shelfId, book);
        console.log("Adding book to shelf:", book.volumeInfo.title);
    }



    return (
        <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
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
                        value={inputValue}
                        onChange={handleInputChange}
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
                        onClick={handleSearch}
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
            <Divider sx={{ height: 4, width: '85%', backgroundColor: '#8697A6', borderRadius: 5 }} />
            <Box>
                <SearchBooks searchTerm={searchTerm} onAddBook={handleAddBookToShelf} />
            </Box>
        </Container>
        </Box>
    )
}
