import React from 'react'

export default function InfoCard({ repos }) {
    return (


        <div>


            <li>{repos.name}</li>
            <li>{repos.description}</li>
            <li>{repos.language}</li>



        </div>
    )
}
