import { Link } from 'react-router-dom';
import { Box, Button } from "@mui/material";

import BookCover from '../../assets/rothfuss.jpg'

export default function AddBookCard(props) {
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
            <Box sx={{}}>
                <h2 style={{fontSize: 18}}>{props.bookName}</h2>
                <p style={{fontSize: 16, marginTop: -20}}>by {props.bookAuthor}</p>
                <p style={{fontSize: 16, lineHeight: 1.5}}>{props.description}</p>
            </Box>
            <Box sx={{paddingLeft: 5, paddingTop: '12%'}}>
                <Link to={`/library/shelf/${props.shelfId}`} style={{ textDecoration: 'none', color: "#000" }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '295px',
                            height: '50px',
                            backgroundColor: '#593122',
                            marginRight: '105px',
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: '#A6633C',
                            }
                        }}
                    >Add Book To Shelf
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}