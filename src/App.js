import './App.css';

import { BrowserRouter, Routes } from "react-router-dom";
import { config } from "./routes/config";

export default function App() {

  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  
  return (
    <BrowserRouter>
      <Routes>{config}</Routes>
    </BrowserRouter>
  );
}
