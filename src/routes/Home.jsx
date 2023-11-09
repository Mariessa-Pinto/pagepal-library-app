import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <p>
                <Link to="/library">Library</Link>
            </p>
        </div>
    );
}
