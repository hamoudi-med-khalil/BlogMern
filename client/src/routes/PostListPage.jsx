import React, { useState } from 'react'
import Image from '../components/Image'
import { Link } from 'react-router'
import Search from '../components/Search'
import Filters from '../components/Filters'
import PostList from '../components/PostList'
import SideBar from '../components/SideBar'

const PostListPage = () => {
  const [open , setOpen] = useState(false)
  return (
    <div className='flex flex-col h-[calc(100vh-64px)]'>
      <button className='bg-blue-800 text-white w-[20%] rounded-xl xl:hidden ' onClick={() => setOpen((prev) => !prev)}> 
        {open ? 'close' : `Filter and Search`}
      </button>
      <h1 className='text-xl font-medium'>Developement Blog </h1>
      <div className='flex flex-col-reverse gap-4 mt-8 md:flex-row'>
        {/* post*/}
        <div className='flex flex-col w-3/4 gap-8 mb-4'>
          <PostList />
        </div>
        {/** aside bar */}
        <div className= {`${open ? 'block' : 'hidden'} md:block`}>
        <SideBar />
        </div>
      </div>
    </div >

  )
}

export default PostListPage