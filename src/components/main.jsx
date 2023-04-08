import React from 'react'
import './main.css';
import Nav from './nav.jsx';

const Home = () => {
    return (
        <>
            <div>
                <h1>Project 1</h1>
                <h2>From Scratch</h2>
            </div>
            <Nav/>
            <div className='box1'>
                <article className='minibox'>
                    <h3>
                        Website Goals
                    </h3>
                    <p>
                        Learn basic features but also learn how to make cool animations and integrate JavaScript backend.
                    </p>
                </article>
                <arcticle className='minibox'>
                    <h3>
                        Future Updates
                    </h3>
                    <p>
                        Add multiple pages
                    </p>
                </arcticle>
            </div>
        </>
        
    )
}

export default Home