import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <>
            <button className='button'>
                <a href='/home'>Home Page</a>
            </button>
            <button className='button'>
                <a href="/history">Progress Log</a>
            </button>
            <button className='button'>
                <a href="/animations">Animations</a>
            </button>
        </>
    )
}

export default Nav