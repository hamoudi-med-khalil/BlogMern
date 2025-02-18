import React from 'react'
import { Link } from 'react-router'
import MainCategories from '../components/MainCategories'
import FeatresPosts from '../components/FeatresPosts'
import PostList from '../components/PostList'

const HomePage = () => {
  return (
    <div className='mt-4 flex flex-col '>
      <div className='flex gap-4'>
        <Link to='/' className='font-medium'>Home</Link>
        <span>.</span>
        <span className='text-blue-800'>Blogs and Articles</span>
      </div>

      <div className=" flex items-center justify-between ">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="mt-1 md:mt-8 text-md md: text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            rerum accusantium.
          </p>
        </div>
        <Link className='hidden md:block relative ' to='/write'>
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className='text-lg tracking-widest animate-spin animatedButton'
          >
            <path
              id='circlePath'
              d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
              fill='none'
            />
            <text>
              <textPath href='#circlePath' startOffset='0%' >Write your story</textPath>
              <textPath href='#circlePath' startOffset='50%'>Share your idea</textPath>
            </text>
          </svg>
          <button className=' bg-blue-900 rounded-full w-20 h-20 absolute top-0 left-0 right-0 bottom-0 m-auto'>
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              className="bi bi-arrow-right-short"
              transform="rotate(-45)">
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z">
              </path>
            </svg>


          </button>

        </Link>
      </div>
      <MainCategories />
      <FeatresPosts />
       <div className=''>
        <h1 className='my-8 text-gray-600 font-medium text-2xl'>Recent posts</h1>
        <PostList/>
       </div>


    </div>
  )
}

export default HomePage