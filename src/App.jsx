import React from 'react';
import Home from './components/main.jsx';
import Logs from './components/logs.jsx';
import Animations from './components/animations.jsx';
import Game from './components/game.jsx';
import {
    Routes,
    Route
  } from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/history" element={<Logs />} />
                <Route path="/animations" element={<Animations />} />
                <Route path="/game" element={<Game/>} />
            </Routes>
        </>
    )
}

export default App