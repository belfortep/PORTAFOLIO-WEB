import React from 'react'
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard'
import useFetch from '../hooks/useFetch'
import { LinearProgress } from '@mui/material'
import './homePage.css'
import Header from '../components/Header';


export default function HomePage({ user }) {

    const repos = useFetch('https://api.github.com/users/belfortep/repos');

    console.log(repos.data);

    return (

        <>
            <Header />

            <section>
                <div className='sectionContainer'>
                    <div className='sectionGridContainer'>
                        <div>
                            <h1 className='sectionTitle'>{user.name}</h1>
                            <p className='sectionText'>{user.bio}</p>
                        </div>
                        <div>
                            <div className='sectionImageContainer'>
                                <img className='sectionImage' src={user.avatar_url} alt='Imagen de perfil de Paolo Belforte'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {repos.loading ? <div className='linearProgress'><LinearProgress color='inherit' /></div> : <section>
                <div>
                    <div>
                        <h2>Repositorios</h2>
                        <span>Un listado de mis trabajos publicos</span>
                    </div>
                    <div className='cardContainer'>
                        {repos.data.map((repos, index) => (
                            <InfoCard repos={repos} key={index} />
                        ))}
                    </div>
                </div>
            </section>}

            <Footer user={user} />
        </>
    )
}
