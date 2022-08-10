import React from 'react'
import './infoCard.css'
import Moment from 'react-moment'
import moment from 'moment';
export default function InfoCard({ repos }) {

    const onClick = () => {
        window.open(repos.clone_url)
    }


    return (


        <>
            <div className='card' onClick={onClick}>
                <div className='cardTitle'>
                    <span className='cardTitleText'>{repos.name}</span>
                </div>
                <div>
                    <header className='cardHeader'>
                        <div className='cardHeaderContainer'>
                            <h3 className='cardHeaderText'>{repos.language}</h3>
                        </div>
                    </header>
                    <p className='cardBody'>
                        {repos.description || "missing description"}
                    </p>
                    <div className='cardFooter'>
                        <div className='cardFooterImage'>
                            <img className='cardSmallImage'></img>{/*poner imagen dependiendo de lenguaje*/}
                        </div>
                    </div>
                    <span className='cardFooterText'>Ultima actualización: <Moment date={moment(repos.updated_at)} format='DD/MM/YYYY' /></span>
                </div>
            </div>
        </>
    )
}
