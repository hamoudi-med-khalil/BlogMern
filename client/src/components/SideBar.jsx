import React from 'react'
import Search from './Search'
import Filters from './Filters'
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
  return (
    <div className='h-max sticky  top-8  flex flex-col'>
          <Search />
          <Filters />
          <h1 className="mt-8 mb-4 text-sm font-bold">Categories</h1>

          <div className='flex flex-col gap-2 text-sm'>

          <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("general")}>All</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("web-design")}>Web Design</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("development")}>Development</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("databases")}>Databases</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("seo")}>Search Engines</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("marketing")}>Marketing</span>

          </div>
        </div>
  )
}

export default SideBar