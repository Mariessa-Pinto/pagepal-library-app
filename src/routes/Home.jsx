import { Link } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";

export default function Home() {
    return (
        <Container>
            <p>
                <Link to="/library">Library</Link>
            </p>
        </Container>
    );
}
