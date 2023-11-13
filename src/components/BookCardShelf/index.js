import { Link } from 'react-router-dom';
import { Box, Button } from "@mui/material";

import BookCover from '../../assets/rothfuss.jpg'
import TrashIcon from '../../assets/trash.png'

export default function AddBookCardShelf(props) {
    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            gap: 2
        }}>
            <img
                src={BookCover}
                alt='books on shelf'
                width={195}
                height={255}
                style={{marginTop: 20}}
            />
            <Box sx={{ }}>
                <h2 style={{fontSize: 18}}>{props.bookName}</h2>
                <p style={{fontSize: 16, marginTop: -20}}>by {props.bookAuthor}</p>
                <p style={{fontSize: 16, lineHeight: 1.5}}>{props.description}</p>
            

            <Box sx={{display: 'flex', flexDirection: 'row',marginLeft: 65}}>
         
                <Link to={`/library/newshelf/`} style={{ textDecoration: 'none', color: "#000" }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '200px',
                            height: '50px',
                            backgroundColor: '#593122',
                            marginRight: '105px',
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: '#A6633C',
                            }
                        }}
                    >Change Shelf
                    </Button>
               
                </Link>
                <img
                    src={TrashIcon}
                    height={40}
                    width={40}
                    alt='trash icon'
                    />
         </Box>
            </Box>
            </Box>
    
    )
}