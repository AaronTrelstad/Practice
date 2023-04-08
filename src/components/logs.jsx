import React from 'react';
import './logs.css';
import Nav from './nav.jsx';

const Logs = () => {
    return (
        <>
            <h1>Progress Log</h1>
            <h2>Follow along to see how this website progresses</h2>
            <Nav/>
            <div className='entry'>
                <p>4/8/2023 - Buttons were added through a navbar that connects home to logs</p> 
                <p>4/6/2023 - Website was originally created and Home page was made</p>
            </div>
        </>
    )
}

export default Logs