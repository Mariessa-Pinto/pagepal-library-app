import React, { useState, useEffect } from 'react';
import { Box, Button } from "@mui/material";
import { Link, useParams } from 'react-router-dom';
import { useShelf } from '../../routes/ShelfContext';

export default function SearchBooks({ searchTerm, onAddBook }) {
    const { shelfId } = useParams();
    const [books, setBooks] = useState([]);
    const [expandedDescriptionIndex, setExpandedDescriptionIndex] = useState(null);
    const { shelves, addBookToShelf } = useShelf();

    const handleAddBookToShelf = (book) => {
        // Check if the current shelf matches the shelfId
        if (shelves.some(shelf => shelf.id === parseInt(shelfId))) {
            // Use the shelfId prop passed to the component
            addBookToShelf(shelfId, book);
            console.log("Shelves after adding book:", shelves);
        } else {
            // Handle the case where the shelf is not found
            console.error(`Shelf with id ${shelfId} not found.`);
        }
    };

    useEffect(() => {
        if (!searchTerm) return;

        const books_url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&key=AIzaSyBft4dK7irwx7K6fvOoW-oSMMH1MtkH15w`


        async function getBooks() {
            try {
                const response = await fetch(books_url);
                const data = await response.json();
                setBooks(data.items || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getBooks();
    }, [searchTerm]);

    const toggleDescription = (index) => {
        if (expandedDescriptionIndex === index) {
            setExpandedDescriptionIndex(null);
        } else {
            setExpandedDescriptionIndex(index);
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            {books.map((book, index) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'left',
                        alignItems: 'center',
                        gap: 2,
                        maxWidth: '100rem'
                    }}
                    key={index}
                >
                    {/* Book Thumbnail */}
                    {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt='Book thumbnail'
                            width={195}
                            height={280}
                            style={{ marginTop: 20, objectFit: 'cover' }}
                        />
                    )}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '40rem'
                    }}>
                        {/* Book Title and Authors */}
                        <h2 style={{ margin: 0, marginTop: '1rem', fontSize: 20, fontWeight: '700' }}>{book.volumeInfo.title}</h2>
                        <p style={{ margin: 0, marginTop: '-0.2rem', fontSize: 16, fontWeight: '300' }}>by {book.volumeInfo.authors?.join(', ')}</p>
                        {/* Description */}
                        {book.volumeInfo.description && (
                            <React.Fragment>
                                {expandedDescriptionIndex !== index && (
                                    <p style={{ fontSize: 16, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
                                        {book.volumeInfo.description}
                                    </p>
                                )}
                                {expandedDescriptionIndex === index && (
                                    <p style={{ fontSize: 16, }}>{book.volumeInfo.description}</p>
                                )}
                                {/* Toggle button */}
                                <Button
                                    variant="text"
                                    onClick={() => toggleDescription(index)}
                                    sx={{
                                        marginTop: '0.5rem',
                                        color: '#593122',
                                        '&:hover, &.Mui-focusVisible': {
                                            backgroundColor: 'rgba(166, 99, 60, .1)',
                                        },
                                    }}
                                >
                                    {expandedDescriptionIndex === index ? 'Hide Description' : 'Read More'}
                                </Button>
                            </React.Fragment>
                        )}
                    </Box>
                    {/* Add to Shelf button */}
                    <Link to={`/library/shelf/${shelfId}`} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleAddBookToShelf(book)}
                            sx={{
                                width: '270.19px',
                                height: '50px',
                                backgroundColor: '#593122',
                                '&:hover, &.Mui-focusVisible': {
                                    backgroundColor: '#A6633C',
                                },
                            }}
                        >
                            Add to Shelf
                        </Button>
                    </Link>
                </Box>
            ))}
        </Box>
    );
}
