import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <br />
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo exercitationem voluptate, nostrum maxime dignissimos qui odio nihil tenetur fugiat temporibus. Iste aliquid magnam nisi neque corrupti! Quibusdam recusandae totam placeat?
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo exercitationem voluptate, nostrum maxime dignissimos qui odio nihil tenetur fugiat temporibus. Iste aliquid magnam nisi neque corrupti! Quibusdam recusandae totam placeat?
                </p>
            </div>
        </div>
    )
}

export default About