import { Link } from 'react-router-dom';
import { Box } from "@mui/material";

import Books from '../../assets/bookshelfBooks.svg'

export default function Shelf(props) {
    return (
        <Link to="/library/shelf/1">
            <Box sx={{borderRight: '5px solid #8697A6', borderBottom: '5px solid #8697A6'}}>
                <h2>props.shelfName</h2>
                <img
                    src={Books}
                    alt='books on shelf'
                    width={452}
                    height={187}
                />
            </Box>
        </Link>
    )
}