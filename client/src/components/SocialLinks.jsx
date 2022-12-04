import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkdIn <FaLinkedin size={30} />
                </>
            ),
            href: 'http://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    LinkdIn <FaGithub size={30} />
                </>
            ),
            href: 'http://github.com',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    LinkdIn <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:foo@gmail.com',
            style: 'rounded-tr-md'
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links?.map((item) => (
                        <li className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' + item.style}>
                            <a href={item.href} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                                {item.child}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks