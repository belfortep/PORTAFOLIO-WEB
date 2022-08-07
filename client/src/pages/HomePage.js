import React from 'react'
import InfoCard from '../components/InfoCard'
import useFetch from '../hooks/useFetch'
import './homePage.css'


export default function HomePage() {

    const repos = useFetch('https://api.github.com/users/belfortep/repos');

    const user = useFetch('https://api.github.com/users/belfortep');

    console.log(user.data);

    return (

        <div>

            <h2>{user.data.name}</h2>
            <h3>{user.data.bio}</h3>

            <img src={user.data.avatar_url} />

            {repos.data.map((repos, index) => (
                <InfoCard repos={repos} key={index} />
            ))}

        </div>
    )
}
