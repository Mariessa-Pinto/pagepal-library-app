import { useState, useEffect } from 'react';
import { Box, Button, Divider } from "@mui/material";
import { useShelf } from '../../routes/ShelfContext';
import { Link, useParams } from 'react-router-dom';

import TrashIcon from '../../assets/trash.png';

export default function AddBookCardShelf() {
    const { shelves, removeBookFromShelf, addBookToShelf } = useShelf();
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [selectedBookIndex, setSelectedBookIndex] = useState(null);
    const { shelfId } = useParams();
    const [currentShelf, setCurrentShelf] = useState(null);
    const [showChangeShelf, setShowChangeShelf] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundShelf = shelves.find(shelf => shelf.id === parseInt(shelfId));
        setCurrentShelf(foundShelf);
        setLoading(false); // Set loading to false once data is fetched
    }, [shelves, shelfId]);

    const handleToggleDescription = (bookIndex) => {
        if (selectedBookIndex === bookIndex) {
            setShowFullDescription(!showFullDescription);
        } else {
            setShowFullDescription(true);
        }
        setSelectedBookIndex(bookIndex);
    };

    const handleDeleteBook = (shelfId, bookIndex) => {
        removeBookFromShelf(shelfId, bookIndex);
    };

    const truncateDescription = (description) => {
        const words = description.split(' ');
        const truncated = words.slice(0, 150).join(' ');
        return truncated + (words.length > 150 ? '...' : '');
    };
    if (!currentShelf || !currentShelf.books) {
        return null;
    }

    const handleChangeShelf = (selectedShelfId, bookIndex) => {
        if (bookIndex === null || bookIndex === undefined || !currentShelf.books[bookIndex]) {
            return; // Ensure book index is valid before proceeding
        }
        
        const bookToMove = currentShelf.books[bookIndex];
    
        // Find the shelf to move the book to
        const targetShelf = shelves.find(shelf => shelf.id === selectedShelfId);
    
        if (targetShelf) {
            // Add the book to the selected shelf
            addBookToShelf(selectedShelfId, bookToMove);
    
            // Remove the book from the current shelf
            removeBookFromShelf(currentShelf.id, bookIndex);
        }
        
        // Close the dropdown/modal after changing the shelf
        setShowChangeShelf(false);
    };


    if (loading) {
        return <p>Loading...</p>; // Display loading state while fetching data
    }

    if (!currentShelf || !currentShelf.books) {
        return <p>No books found in this shelf.</p>; // Handle cases where shelf data is empty or not found
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            alignItems: 'flex-start',
            gap: 2,
            maxWidth: '110rem'
        }}>
            <Box>
                {currentShelf.books.map((book, bookIndex) => (
                    <Box key={bookIndex}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            maxWidth: '100rem',
                            gap: '1rem'
                        }}>
                            <Box>
                                <img
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                    alt='books on shelf'
                                    width={195}
                                    height={280}
                                    style={{ marginTop: 20, objectFit: 'cover' }}
                                />
                            </Box>
                            <Box>
                                <h2 style={{ fontSize: 20, fontWeight: '700' }}>{book.volumeInfo.title}</h2>
                                <p style={{ fontSize: 16, marginTop: -20, fontWeight: '300' }}>by {book.volumeInfo.authors}</p>
                                <p style={{ fontSize: 16, lineHeight: 1.5, maxWidth: '45rem' }}>
                                    {showFullDescription && selectedBookIndex === bookIndex
                                        ? book.volumeInfo.description
                                        : truncateDescription(book.volumeInfo.description)}
                                    {truncateDescription(book.volumeInfo.description).length > 150 && (
                                        <Button
                                            variant="text"
                                            onClick={() => handleToggleDescription(bookIndex)}
                                            sx={{
                                                color: '#593122',
                                                '&:hover, &.Mui-focusVisible': {
                                                    backgroundColor: 'rgba(166, 99, 60, .1)',
                                                },
                                            }}
                                        >
                                            {showFullDescription && selectedBookIndex === bookIndex ? 'Show less' : 'Read more'}
                                        </Button>
                                    )}
                                </p>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '5rem', marginBottom: '1rem', "@media (max-width: 768px)": {
                                marginRight: '-15rem', width: '16rem'
                            },
                        }}>
                            <Box>
                                {showChangeShelf && (
                                    <div>
                                        {shelves.map(shelf => (
                                            <Button
                                                key={shelf.id}
                                                onClick={() => handleChangeShelf(shelf.id, bookIndex)}
                                                sx={{
                                                    backgroundColor: '#FFFFFF',
                                                    color: '#593122',
                                                    marginRight: '1rem',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(166, 99, 60, .1)',
                                                    },
                                                }}
                                            >
                                                {shelf.name}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </Box>
                            <Button
                                onClick={() => setShowChangeShelf(!showChangeShelf)}
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
                                        marginRight: '20px'
                                    },
                                }}
                            >Change Shelf
                            </Button>
                            <Button
                                onClick={() => handleDeleteBook(currentShelf.id, bookIndex)}
                                sx={{
                                    '&:hover, &.Mui-focusVisible': {
                                        backgroundColor: 'rgba(166, 99, 60, .1)',
                                    },
                                }}
                            >
                                <img
                                    src={TrashIcon}
                                    height={40}
                                    width={40}
                                    alt='trash icon'
                                />
                            </Button>
                        </Box>
                        <Divider sx={{ height: 2, width: '75%', backgroundColor: '#8697A6', borderRadius: 5, marginTop: '2rem', marginBottom: '1rem' }} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
