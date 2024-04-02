import { useState } from 'react'
import { Img } from './Img'
 
const navItems = [
{
    id: 1,
    text: "About Me",
    link: "#"
},
{
    id: 2,
    text: "Work",
    link: "#"
},
{
    id: 3,
    text: "Blog",
    link: "#"
},

]
const Navbar = () => {
const [openNavbar, setOpenNavbar] = useState(false)
const toggleNavbar = () => {
    setOpenNavbar(openNavbar => !openNavbar)
}
return (
    <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
            <div className="flex items-center min-w-max relative">
                <a href="#" className="font-semibold flex items-center gap-x-2">
                   
                    <span className="text-lg text-gray-700 "><Img src="images/img_mayur_logo.svg" alt="mayurlogo_one" className="self-start h-[25px] sm:w-full mt-2" /></span>
                </a>
            </div>
            <div className={`
                fixed inset-x-0 h-[100dvh] lg:h-max top-0  lg:translate-y-0 lg:opacity-100 left-0 bg-slate-800  lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                ${openNavbar ? "" : " -translate-y-10 opacity-0 invisible lg:visible"}
            `}>
                <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-100  lg:w-full lg:justify-center">
                    {
                        navItems.map(navItem => (
                            <li key={navItem.id}>
                                <a href={navItem.link} className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 ">{navItem.text}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                    <a href="#" className="px-6 py-3 duration-300 ease-linear flex justify-center w-full sm:w-auto border border-gray-100 text-gray-100 hover:text-white hover:bg-orange-500 rounded-xl">
                        Get It touch
                    </a>
                </div>
            </div>
            <div className="flex items-cente lg:hidden">
                <button onClick={() => { toggleNavbar() }} className="outline-none border-l border-l-purple-100  pl-3 relative py-3">
                    <span className="sr-only">Toggle navbar</span>
                    <span aria-hidden="true" className={`
                            flex h-0.5 w-6 rounded bg-gray-100  transition duration-300
                            ${openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""}
                        `} />
                    <span aria-hidden="true" className={`
                            flex mt-2 h-0.5 w-6 rounded bg-gray-100  transition duration-300
                            ${openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""}
                        `} />
                </button>
            </div>
        </nav>
    </header>
)
}
export { Navbar }