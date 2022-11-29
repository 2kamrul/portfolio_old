import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const navOptions = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black'>
            <div>
                <h1 className='text-4xl font-signature pl-6'>Kamrul</h1>
            </div>

            {/* Desktop Nav */}
            <ul className='hidden md:flex pr-6'>
                {navOptions?.map(item => (
                    <li key={item?.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        {item?.link}
                    </li>
                ))}
            </ul>

            {/* Mobile Nav */}
            <div onClick={() => setNav(state => !state)} className='cursor-pointer pr-6 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={27} /> : <FaBars size={27} />}
            </div>

            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-gray-500'>
                        {navOptions?.map(item => (
                            <li key={item?.id} className='text-4xl px-4 py-6 cursor-pointer capitalize hover:scale-105 duration-200'>
                                {item?.link}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default NavBar