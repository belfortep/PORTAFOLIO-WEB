import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import HomeIcon from '@mui/icons-material/Home';
export default function Header() {
    return (
        <>
            <nav>
                <div className='headerContainer'>
                    <div className='headerFlexContainer'>
                        <Link className='headerHomeLink' to='/'><HomeIcon fontSize='large' /></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
