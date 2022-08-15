import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export default function Header() {
    return (
        <>
            <nav>
                <div className='headerContainer'>
                    <div className='headerFlexContainer'>
                        <Link className='headerHomeLink' to='/'>Home</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
