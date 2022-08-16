import React from 'react'
import './socialCard.css'
export default function SocialCard({ socialNetwork }) {

    return (
        <>
            <div className='socialCardGrid'>
                <div className='socialCard'>
                    <div className='socialCardImageContainer'>
                        <img className='socialCardImage' src={socialNetwork.img}></img>
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
