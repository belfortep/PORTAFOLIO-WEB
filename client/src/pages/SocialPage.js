import React from 'react'
import Footer from '../components/Footer'

export default function SocialPage({ user }) {

    return (
        <>
            <div className='socialCardContainer'>
                <div className='socialCardGrid'>
                    <div className='socialCard'>
                        <div className='socialCardItem'>
                            <div className='socialCardImageContainer'>
                                <img className='socialCardImage'></img>
                            </div>
                            <div className='socialCardInfoContainer'>
                                <div>
                                    <h3 className='socialCardInfoTitle'>Titulo</h3>
                                    <p className='socialCardInfoText'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis similique reiciendis, magni tenetur consequuntur.
                                    </p>
                                </div>
                                <div >
                                    <a className='socialCardInfoVisit' href=''>Visitar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer user={user} />
        </>
    )
}
