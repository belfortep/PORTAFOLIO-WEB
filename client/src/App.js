import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, NotFoundPage } from './pages'
export default function App() {
  return (
    <div className=''>
      <div className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}