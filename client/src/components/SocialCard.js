import React from 'react'
import './socialCard.css'
export default function SocialCard({ socialNetwork }) {

    let smallImage

    smallImage = require(`../static/images/${socialNetwork.img}`)

    return (
        <>
            <div className='socialCardGrid'>
                <div className='socialCard'>
                    <div className='socialCardImageContainer'>
                        <img className='socialCardImage' src={smallImage}></img>
                    </div>
                    <div className='socialCardInfoContainer'>
                        <div>
                            <h3 className='socialCardInfoTitle'>{socialNetwork.title}</h3>
                            <p className='socialCardInfoText'>
                                {socialNetwork.text}
                            </p>
                        </div>
                        <div >
                            <a className='socialCardInfoVisit' href={socialNetwork.url}>Visitar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
