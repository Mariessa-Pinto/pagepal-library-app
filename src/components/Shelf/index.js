import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import Books from '../../assets/bookshelfBooks.svg';

export default function Shelf(props) {
    const boxStyle = {
        background: `url(${Books})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 452,
        height: 187,
        "@media (max-width: 768px)": {
            width: 420
        },

    };

    return (
        <Link to={`/library/shelf/${props.shelfId}`} style={{ textDecoration: 'none', color: "#000" }}>
            <Box sx={{
                borderRight: '5px solid #8697A6',
                borderTopRightRadius: '3px',
                borderBottomLeftRadius: '3px',
                borderBottom: '5px solid #8697A6',
                marginRight: '6.45rem',
                "@media (max-width: 768px)": {
                    marginRight: '-13.2rem'
                },
            }}>
                <h2 style={{
                    paddingLeft: '10rem', "@media (max-width: 768px)": {
                        marginLeft: '-102rem'
                    },
                }}>{props.shelfName}</h2>
                <Box sx={boxStyle}>
                </Box>
            </Box>
        </Link>
    );
}
