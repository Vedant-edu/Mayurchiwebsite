import React from 'react'
import { Navbar } from './Navbar'
import MainSection from './MainSection'
import AboutHim from './AboutHim'

export default function MainPage() {
  return (
    <div className='bg-slate-800'>
      <Navbar/>
      <MainSection/>
      <AboutHim/>
    </div>
  )
}
