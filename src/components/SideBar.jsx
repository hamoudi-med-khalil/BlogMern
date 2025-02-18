import React from 'react'
import Search from './Search'
import Filters from './Filters'
import { Link } from 'react-router'

const SideBar = () => {
  return (
    <div className='h-max sticky  top-8  flex flex-col'>
          <Search />
          <Filters />
          <h1 className="mt-8 mb-4 text-sm font-bold">Categories</h1>

          <div className='flex flex-col gap-2 text-sm'>
            <Link to='/' className='underline'>All </Link>
            <Link to='/' className='underline' >Web Design</Link>
            <Link to='/' className='underline' >Developement</Link>
            <Link to='/' className='underline' >Databases</Link>
            <Link to='/' className='underline' >Search Engines</Link>
            <Link to='/' className='underline' >Marketing</Link>
          </div>
        </div>
  )
}

export default SideBar