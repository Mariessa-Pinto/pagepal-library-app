import { useState, useEffect } from 'react'
import { Box, Button } from "@mui/material";


export default function SearchBooks({ searchTerm, onAddBook }) {
    const [books, setBooks] = useState([]);

   const apiKey = process.env.REACT_APP_BOOKS_API_KEY

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
        getBooks()
    }, [searchTerm]);

    const handleAddBook = (book) => {
        onAddBook(book);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            alignItems: 'flex-start',
            gap: 2,
            maxWidth: '100rem'
        }}>
            {books.map((book, index) => (
                <Box key={index}>
                    <h2>{book.volumeInfo.title}</h2>
                    <p>by {book.volumeInfo.authors?.join(', ')}</p>
                    <p>{book.description}</p>
                  
                    <Button 
                    variant="contained" 
                    onClick={() => handleAddBook(book)}
                >
                    Add to Shelf
                </Button>
                </Box>
            ))}
        </Box>
    )
}