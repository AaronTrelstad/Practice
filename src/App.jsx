import React from 'react';
import Home from './components/main.jsx';
import Logs from './components/logs.jsx';
import Animations from './components/animations.jsx';
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
            </Routes>
        </>
    )
}

export default App