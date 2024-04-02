import React from 'react'
import { Text } from './Text'
import { Heading } from './Heading'
import { Button } from './Button'
import { Img } from './Img'

export default function MainSection() {
  return (
    <div>
      <main className="w-full pt-32">
    <section className="relative pt-10 xl:pt-14">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
        <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
            <p className='text-orange-500 pb-5'>MAYUR MUNDANKAR</p>
          <h1 className="text-gray-100 font-extrabold text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight  text">
          The Simple, 
Clean Design
          </h1>
          <p className="mt-10 text-gray-400  lg:text-lg max-w-2xl lg:max-w-none mx-auto">
          Designing User Interfaces & creating User Experiences that provides Solution
          </p>
          <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
            <a href="#" className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-orange-500 text-white hover:before:bg-indigo-800 before:bg-orange-500/80 hover:before:scale-105">
              <span className="relative">
                Get Started
              </span>
            </a>
            
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
          <img src="/images/heroImg.webp" alt="happy team" width={1850} height="auto" className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full" />
          
        </div>
      </div>
    </section>
  </main>
  
  
  
  
<nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col sm:flex-row gap-x-5 pt-56 justify-start items-center">
    <div className="flex items-center min-w-max relative">
        <a href="#" className="font-semibold flex items-center gap-x-2">
            <div className='inline'>
                <p className='text-orange-500 pb-5'>PORTFOLIO</p>
                <h1 className="text-gray-100 font-extrabold text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight text">
                    Latest Work
                </h1>
            </div>
        </a>
    </div>

    <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
        <a href="#" className="px-6 py-3 duration-300 ease-linear flex justify-center w-full sm:w-auto border border-gray-100 text-gray-100 hover:text-white hover:bg-blue-700 rounded-xl">
            Get In Touch
        </a>
    </div>
</nav>


  <section class="py-32">
    <div class="max-w-7xl mx-auto">
        <div class="flex flex-col  px-3 py-8 ">
            <div
            class="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">           
            </div>
            <div class="grid gap-8 sm:grid-cols-2">
            <div class="flex flex-col p-5 xl:p-7 space-y-3 ">
                
            <div className="h-[576px] w-full md:h-auto relative">
            <Img src="images/img_bitmap_576x448.png" alt="bitmap_one" className="h-[576px] w-full object-cover" />
                <div className="flex flex-col items-start justify-end w-full h-max gap-[22px] left-0 bottom-0 right-0 top-0 p-[46px] m-auto md:p-5 bg-gray-900_01 absolute">
                  <div className="flex justify-center w-[45%] md:w-full mt-[369px] md:p-5 bg-white-A700 rounded-[19px]">
                    <p as="p" className="self-start w-[76%] !text-gray-900 leading-8">
                      Design Project 1
                    </p>
                  </div>
                  <h3 as="h4" className="mb-3">
                    SE Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="flex flex-col p-5 xl:p-7 space-y-3  ">
                
            <div className="h-[576px] w-full md:h-auto relative">
                <Img src="images/img_bitmap_1.png" alt="bitmap_one" className="h-[576px] w-full object-cover" />
                <div className="flex flex-col items-start justify-end w-full h-max gap-[22px] left-0 bottom-0 right-0 top-0 p-[46px] m-auto md:p-5 bg-gray-900_01 absolute">
                  <div className="flex justify-center w-[45%] md:w-full mt-[369px] md:p-5 bg-white-A700 rounded-[19px]">
                    <p as="p" className="self-start w-[76%] !text-gray-900 leading-8">
                      Design Project 1
                    </p>
                  </div>
                  <h3 as="h4" className="mb-3">
                    SE Site
                  </h3>
                </div>
              </div>
            </div>
            
            
            </div>
        </div>
    </div>
</section>
    </div>
  
  
  
  
  
  
  
  
  )
}
