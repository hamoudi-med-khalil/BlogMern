import React from 'react'
import Search from './Search'
import Filters from './Filters'
<<<<<<< HEAD
import { Link } from 'react-router'

const SideBar = () => {
=======
import { Link, useSearchParams } from 'react-router'

const SideBar = () => {


  const [searchParams, setSearchParams] = useSearchParams()


  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        category:category,
      });
    }
  };
>>>>>>> 7aa20d9 (React setup)
  return (
    <div className='h-max sticky  top-8  flex flex-col'>
          <Search />
          <Filters />
          <h1 className="mt-8 mb-4 text-sm font-bold">Categories</h1>

          <div className='flex flex-col gap-2 text-sm'>
<<<<<<< HEAD
            <Link to='/' className='underline'>All </Link>
            <Link to='/' className='underline' >Web Design</Link>
            <Link to='/' className='underline' >Developement</Link>
            <Link to='/' className='underline' >Databases</Link>
            <Link to='/' className='underline' >Search Engines</Link>
            <Link to='/' className='underline' >Marketing</Link>
=======

          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("general")}>All</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("web-design")}>Web Design</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("development")}>Development</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("databases")}>Databases</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("seo")}>Search Engines</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("marketing")}>Marketing</span>

>>>>>>> 7aa20d9 (React setup)
          </div>
        </div>
  )
}

export default SideBar