import React from 'react'
import { Link } from 'react-router'
import Image from './Image'

const Comment = () => {
    return (
        <div className='flex flex-col w-full bg-white rounded-xl mt-4 mb-8 p-4'>
            <div className='flex items-center gap-2 mb-4'>
                <Image src='/userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w='40'  />
                <Link className='text-blue-700 '>Joe Doe</Link>
                <span className='text-sm text-gray-500'>2 days ago</span>
            </div>
            <p className='text-justify '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nobis temporibus ad ex, dignissimos quam aliquam atque commodi consectetur, dolore maxime! Omnis incidunt cupiditate nisi explicabo rerum aut distinctio facilis?
            </p>


        </div>
    )
}

export default Comment