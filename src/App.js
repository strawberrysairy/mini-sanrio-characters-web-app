import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SanrioCharacters from "./components/sanrioCharacters";
import CharacterCard from "./components/characterCard";
import CharacterPage from "./components/characterPage";

import { CharacterProvider } from "./components/characterProvider"; // Update this path according to your file structure

function App() {
    return(
        <CharacterProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<SanrioCharacters />} />
                        <Route path = "/:pageName" element={<CharacterPage />} />
                    </Routes>
                </div>
            </Router>
        </CharacterProvider>
    );
};

export default App;
