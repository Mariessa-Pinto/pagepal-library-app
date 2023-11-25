import { Link } from 'react-router-dom';
import { Box, Button } from "@mui/material";
import { useShelf } from '../../routes/ShelfContext';

import BookCover from '../../assets/rothfuss.jpg'
import TrashIcon from '../../assets/trash.png'

export default function AddBookCardShelf(props) {
    const { shelves, removeBookFromShelf } = useShelf();

const handleDeleteBook = (shelfId, bookIndex) => {
        removeBookFromShelf(shelfId, bookIndex);
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
             <Box>
            {shelves.map((shelf, index) => (
              <Box key={index}>
                <h2>{shelf.name}</h2>
                <img
                src={BookCover}
                alt='books on shelf'
                width={195}
                height={255}
                style={{ marginTop: 20 }}
            />
                <Box sx={{}}>
                  {shelf.books && shelf.books.map((book, bookIndex) => (
                    <Box key={bookIndex}>
                        <h2 style={{ fontSize: 18 }}>{book.volumeInfo.title}</h2>
                        <p style={{ fontSize: 16, marginTop: -20 }}>by {book.volumeInfo.authors}</p>
                        <p style={{ fontSize: 16, lineHeight: 1.5, maxWidth: '45rem' }}>{props.description}</p>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '5rem', marginBottom: '1rem', "@media (max-width: 768px)": {
                    marginRight: '-15rem', width: '16rem'
                  }, }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '200px',
                            height: '50px',
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
                    <Button onClick={() => handleDeleteBook(shelf.id, bookIndex)}>
                    <img
                        src={TrashIcon}
                        height={40}
                        width={40}
                        alt='trash icon'
                    />
                    </Button>
                </Box>
                      </Box>
                      
                  ))}
                    
                  </Box>
                </Box>
            ))}
          </Box>
           
        
        </Box>
    )
}