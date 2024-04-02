import React from 'react'
import { Navbar } from './Navbar'
import MainSection from './MainSection'

export default function MainPage() {
  return (
    <div className='bg-slate-800'>
      <Navbar/>
      <MainSection/>
    </div>
  )
}
