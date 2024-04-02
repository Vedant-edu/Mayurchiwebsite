import React from 'react'
import MetricsSection from './MetricsSection'

export default function AboutHim() {
  return (
    <div className='bg-gradient-to-r from-orange-50 to-orange-100'>
      <div className="mx-auto lg:max-w-7xl w-full flex flex-col md:items-center md:flex-row-reverse gap-10 lg:gap-14">
  <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-12 space-y-8">
    <div className="space-y-6">
      
      <p className='text-orange-500 pb-5'>MAYUR MUNDANKAR</p>
          <h1 className="text-gray-100 font-extrabold text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight  text text-black">
          Professional
Jr. Web Designer
          </h1>
          <p className="mt-10 text-black  lg:text-lg max-w-2xl lg:max-w-none mx-auto">
          Mayur is a UI designer by passion and engineer by profession, with a deep-rooted love for art. His journey commenced in the realm of creativity, where he delved into diverse artistic mediums.
          </p>
          <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
            <a href="#" className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-gray-100 text-black hover:before:bg-indigo-800 before:bg-gray-100 hover:before:scale-105">
              <span className="relative">
               About Me
              </span>
            </a>
            
          </div>
    </div>
   
  </div>
  <div
    className="flex-1 relative bg-gradient-to-tr from-sky-100 to-indigo-300 
              p-6 rounded-lg aspect-[4/2.4] overflow-hidden"
  >
    <img
      src="/images/dash-dark.webp"
      alt="illustration"
      width={1800}
      className="w-full h-auto"
    />
  </div>
</div>
<MetricsSection/>
    </div>
  )
}
