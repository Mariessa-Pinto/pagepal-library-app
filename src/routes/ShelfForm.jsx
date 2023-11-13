import { Link } from "react-router-dom"
import { Container, Box, Button, TextField } from "@mui/material";
import Arrow from '../assets/leftArrow.svg';

export default function ShelfForm() {
    return (
        <Container>
            <Link to={`/library`} style={{ textDecoration: 'none' }}>
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
            <Box
                sx={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: 'black', fontSize: 32, fontWeight: 'bold', marginTop: '10rem' }}>Add A Shelf</p>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'black', fontSize: 18 }}>Shelf Name</p>
                    <TextField
                        id="outlined-basic"
                        label="Enter Shelf Name"
                        variant="outlined"
                        sx={{
                            width: 358,
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
                </Box>
                <Link
                    to="/library"
                    style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '270.19px',
                            height: '50px',
                            backgroundColor: '#593122',
                            marginRight: '105px',
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: '#A6633C',
                            },
                            marginTop: '3rem'
                        }}
                    >
                        Add Shelf to Library
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}
