import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/library">Library</Link>
            </p>
            <p>
                <Link to="/library/shelf/1">Shelf 1</Link>
            </p>
            <p>
                <Link to="/library/newshelf">Create Shelf</Link>
            </p>
            <p>
                <Link to="/library/shelf/1/addbook">Add Book</Link>
            </p>
        </div>
    );
}
