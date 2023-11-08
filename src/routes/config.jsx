import { Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./Home";
import Library from "./Library";
import ShelfForm from "./ShelfForm";
import Shelf from "./Shelf";
import BookForm from "./BookForm";

export const config = (
    <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/newshelf" element={<ShelfForm />} />
        <Route path="/library/shelf/:id" element={<Shelf />} />
        <Route path="/library/shelf/:id/addbook" element={<BookForm />} />
    </Route>
);
