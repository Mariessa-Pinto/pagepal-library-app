import { Link } from "react-router-dom"
import { Container, Box, Button } from "@mui/material";

export default function BookForm() {
    return (
        <Container>
            <p>
                <Link to="/library/shelf/1">Shelf 1</Link>
            </p>
        </Container>
    )
}
