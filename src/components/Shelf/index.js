import { Link } from 'react-router-dom';
import { Box } from "@mui/material";

import Books from '../../assets/bookshelfBooks.svg'

export default function Shelf(props) {
    return (
        <Link to={`/library/shelf/${props.shelfId}`} style={{ textDecoration: 'none', color: "#000" }}>
            <Box
                sx={{
                    borderRight: '5px solid #8697A6',
                    borderTopRightRadius: '3px',
                    borderBottomLeftRadius: '3px',
                    borderBottom: '5px solid #8697A6'
                }}>
                <h2 style={{ paddingLeft: '10rem' }}>{props.shelfName}</h2>
                <img
                    src={Books}
                    alt='books on shelf'
                    width={452}
                    height={187}
                    style={{ paddingLeft: '6rem', marginBottom: "-4px" }}
                />
            </Box>
        </Link>
    )
}