import React from 'react'
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard'
import useFetch from '../hooks/useFetch'
import './homePage.css'


export default function HomePage() {

    const repos = useFetch('https://api.github.com/users/belfortep/repos');

    const user = useFetch('https://api.github.com/users/belfortep');

    return (

        <>

            <h2>{user.data.name}</h2>
            <h3>{user.data.bio}</h3>

            <img src={user.data.avatar_url} />
            <ul>
                {repos.data.map((repos, index) => (
                    <InfoCard repos={repos} key={index} />
                ))}
            </ul>

            <Footer />
        </>
    )
}
