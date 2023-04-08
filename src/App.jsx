import React from 'react';
import Home from './components/main.jsx';
import Logs from './components/logs.jsx'
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
            </Routes>
        </>
    )
}

export default App