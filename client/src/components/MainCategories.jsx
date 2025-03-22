import React from 'react'
import { Link } from 'react-router'
import Search from './Search'

const MainCategories = () => {
    return (
        <div className='mt-4 hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
            <div className='flex-1 flex items-center flex-wrap gap-3 xl:justify-between '>
                <Link
                    to='/posts'
                    className='bg-blue-800 text-white rounded-full px-4 py-2'
                >
                    All Posts
                </Link>
                <Link to='/posts?category=web-design' className=' hover:bg-blue-50 rounded-full px-4 py-2'>Web Design</Link>
                <Link to='/posts?category=developement' className=' hover:bg-blue-50 rounded-full px-4 py-2'>Developement</Link>
                <Link to='/posts?category=databases' className=' hover:bg-blue-50 rounded-full px-4 py-2'>Databases</Link>
                <Link to='/posts?category=seo' className=' hover:bg-blue-50 rounded-full px-4 py-2'>Search Engines</Link>
                <Link to='/posts?category=marketing' className=' hover:bg-blue-50 rounded-full px-4 py-2'>Marketing</Link>
            </div>
            <div className='text-2xl font-bold'>|</div>
            <Search />

        </div>
    )
}

export default MainCategories