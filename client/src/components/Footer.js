import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer({ user }) {
    return (
        <>
            <footer>
                <div className='footerUpContainer'>
                    <div className='gridContainer'>
                        <ul className='gridElement'>
                            <li className='gridInnerElement'>
                                <span><Link to={'/social'}>Redes sociales</Link></span>
                            </li>
                            <li className='gridInnerElement'>
                                <span>pbelforte2003@gmail.com</span>
                            </li>
                            <li className='gridInnerElement'>
                                <span><Link to={'/attributions'} ><span>Attributions</span></Link></span>
                            </li>
                        </ul>
                        <ul className='gridElement'>
                            <li className='gridTextElement'>
                                <span>{user.bio}</span>
                            </li>

                        </ul>

                    </div>
                </div>
                <div className='footerDownContainer'>
                    <span className='footerText'>Paolo Belforte © 2022</span>
                </div>
            </footer>

        </>
    )
}
