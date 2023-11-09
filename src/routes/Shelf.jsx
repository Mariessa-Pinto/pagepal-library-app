import { Link } from "react-router-dom"

import NavBar from "../components/NavBar"

export default function Shelf() {
    return (
        <div>
            <NavBar/>
            <p>
                <Link to="/library/shelf/1/addbook">Add Book</Link>
            </p>
            <p>
                <Link to="/library/newshelf">Create Shelf</Link>
            </p>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/library">Library</Link>
            </p>
        </div>
    )
}
