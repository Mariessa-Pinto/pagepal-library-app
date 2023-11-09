import { Link } from "react-router-dom"

import NavBar from "../components/NavBar"

export default function Library() {
    return (
        <div>
            <NavBar />
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/library/shelf/1">Shelf 1</Link>
            </p>
            <p>
                <Link to="/library">Library</Link>
            </p>
            <p>
                <Link to="/library/newshelf">Create Shelf</Link>
            </p>
        </div>
    )
}
