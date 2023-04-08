import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <>
            <button className='button'>
                <a href='/home'>Home</a>
            </button>
            <button className='button'>
                <a href="/history">Progress Log</a>
            </button>
        </>
    )
}

export default Nav