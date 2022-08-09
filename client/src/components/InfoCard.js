import React from 'react'
import './infoCard.css'
export default function InfoCard({ repos }) {
    return (


        <>
            <div className='card'>
                <div>
                    <span>{repos.name}</span>
                </div>
                <div>
                    <header className='cardHeader'>
                        <div className='cardHeaderContainer'>
                            <h3 className='cardHeaderText'>{repos.language}</h3>
                        </div>
                    </header>
                    <p className='cardBody'>
                        {repos.description}
                    </p>
                    <div className='cardFooter'>
                        <div className='cardFooterImage'>
                            <img className='cardSmallImage'></img>{/*poner imagen dependiendo de lenguaje*/}
                        </div>
                        <span className='cardFooterText'>{repos.updated_at}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
