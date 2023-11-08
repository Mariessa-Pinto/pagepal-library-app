import './App.css';

import { BrowserRouter, Routes } from "react-router-dom";
import { config } from "./routes/config";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>{config}</Routes>
    </BrowserRouter>
  );
}
