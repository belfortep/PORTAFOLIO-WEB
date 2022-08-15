import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SocialCard from '../components/SocialCard'
import './socialPage.css'
export default function SocialPage({ user }) {

    const socialNetworkTest = {
        title: 'title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deserunt pariatur quis asperiores quae enim suscipit dolores magnam voluptas, laboriosam maiores aliquam reiciendis consequuntur atque fuga rem eligendi ea animi.',
        url: '/',
        img: ''


    }


    return (
        <>
            <Header />
            <div className='socialCardContainer'>
                <div className='socialCardGridContainer'>
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                    <SocialCard socialNetwork={socialNetworkTest} />
                </div>
            </div>
            <Footer user={user} />
        </>
    )
}
