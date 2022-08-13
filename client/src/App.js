import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Attributions, HomePage, NotFoundPage, SocialPage } from './pages'
import useFetch from './hooks/useFetch'
export default function App() {

  const user = useFetch('https://api.github.com/users/belfortep');

  return (
    <div className=''>
      <div className=''>
        <Routes>
          <Route path='/' element={<HomePage user={user.data} />} />
          <Route path='/attributions' element={<Attributions user={user.data} />} />
          <Route path='/social' element={<SocialPage user={user.data} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}