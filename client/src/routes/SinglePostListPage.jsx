import React from 'react'
import Image from '../components/Image'
import { Link, useParams } from 'react-router'
import SinglePostActions from '../components/SinglePostActions'
import Search from '../components/Search'
import Comments from '../components/Comments'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { format } from 'timeago.js'

const fetchPost = async (slug) =>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`) 
    console.log(res.data)

    return res.data
  }

const SinglePostListPage = () => {
  const {slug} = useParams()

  const { isPending, data, error } = useQuery({
    queryKey: ['post', slug],
    queryFn: ()=> fetchPost(slug),

  })
  if(isPending){ return 'loading..'}
  if(error){ return 'Some thing went wrong!!'}
  if(!data){ return 'No data'}
  
  


  return (
    <div className='flex flex-col gap-4 my-6'>
      {/*Details */}
      <div className='flex gap-2'>
        <div className='flex flex-col gap-8 lg:w-3/5'>
          <h1 className='font-bold text-xl md:text-3xl xl:text-5xl 2xl:text-6xl'>{data.title}</h1>
          <div className='flex flex-row items-center gap-2 text-sm '>
            <span>Writen By :</span>
            <Link className='text-blue-700'>{data.user.username}</Link>
            <span>on</span>
            <Link className='text-blue-700'> {data.category} </Link>
            <span>{format(data.createdAt)}</span>
            
          </div>
          <p className='text-gray-500 font-medium'> {data.description} </p>
        </div>

        { data.img && <div className='hidden lg:block w-2/5'>
          <Image src={`${data.img}`} className='rounded-2xl'
            w='600' />
        </div>}

      </div>

      {/*Content */}
      <div className='flex flex-col md:flex-row gap-28 '>
        <div className='flex gap-4'>
          <div className='text-lg text-justify'>
            <p> {data.content} </p>
          </div>
          <div className='h-max sticky px-4 top-8 bg-blue-100 py-9'>
            <h1 className=" mb-4 text-sm font-bold">Author</h1>
            <div className='flex flex-col gap-4'>
              { data.user.img && <div className='flex items-center gap-8'>
                <Image src={data.user.img} className='w-12 h-12 rounded-full object-cover' w='48' h='48' />
                <Link className='text-blue-700 '>{data.user.username}</Link>
              </div>}
              <p className='text-gray-500'> Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-4'>
                <Link> <Image src='/instagram.svg' /> </Link>
                <Link> <Image src='/facebook.svg' /> </Link>
              </div>
              <SinglePostActions post={data} />
              <h1 className="mt-8 mb-4 text-sm font-bold">Categories</h1>

              <div className='flex flex-col gap-2 text-sm'>
                <Link to='/' className='underline'>All </Link>
                <Link to='/' className='underline' >Web Design</Link>
                <Link to='/' className='underline' >Developement</Link>
                <Link to='/' className='underline' >Databases</Link>
                <Link to='/' className='underline' >Search Engines</Link>
                <Link to='/' className='underline' >Marketing</Link>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </div>
      <Comments postId={data._id}/>
    </div>

  )
}

export default SinglePostListPage