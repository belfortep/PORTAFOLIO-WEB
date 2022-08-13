import React from 'react'
import './infoCard.css'
import Moment from 'react-moment'
import moment from 'moment';
export default function InfoCard({ repos }) {

    const onClick = () => {

        window.open(repos.clone_url)

    }

    let smallImage

    try {

        smallImage = require(`../static/images/${repos.language}.png`)

    } catch (err) {

        console.log(err);
    }

    if (!smallImage) {

        smallImage = require('../static/images/Code.png')

    }


    return (
        <>
            <div className='card' onClick={onClick}>
                <div className='cardTitle'>
                    <span className='cardTitleText'>{repos.name}</span>
                </div>
                <div className='cardBody'>
                    <header className='cardHeader'>
                        <div className='cardHeaderContainer'>
                            <h3 className='cardHeaderText'>{repos.language}</h3>
                        </div>
                    </header>
                    <p className='cardBodyText'>
                        {repos.description || "missing description"}
                    </p>
                    <div className='cardFooter'>
                        <div className='cardFooterImage'>
                            <img className='cardSmallImage' src={smallImage}></img>
                        </div>
                        <span className='cardFooterText'>Última actualización: <Moment date={moment(repos.updated_at)} format='DD/MM/YYYY' /></span>
                    </div>

                </div>

            </div>
        </>
    )
}
