import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SocialCard from '../components/SocialCard'
import useFetch from '../hooks/useFetch'
import './socialPage.css'
export default function SocialPage({ user }) {

    const social = useFetch('http://localhost:4000/api/social');

    return (
        <>
            <Header />
            <div className='socialCardContainer'>
                <div className='socialCardGridContainer'>

                    {social.data.map((network, index) => (
                        <SocialCard key={index} socialNetwork={network} />
                    ))}

                </div>
            </div>
            <Footer user={user} />
        </>
    )
}
