import React from 'react'
import Image from './Image'
import { Link } from 'react-router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { format } from 'timeago.js'


const fetchPost = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`)
    return res.data
}
const FeatresPosts = () => {


    const { isPending, data, error } = useQuery({
        queryKey: ['featuredPost'],
        queryFn: ()=> fetchPost(),
    
      })
      if(isPending){ return 'loading..'}
      if(error){ return 'Some thing went wrong!!'}
      const posts = data.posts
console.log(posts)
      if(!posts || posts.length == 0){
        return
      }
      
    return (
        <div className='mt-8 flex flex-col gap-4 lg:flex-row '>
            {/* first feature */}

            
            <div className='w-full  lg:flex flex-col lg:w-1/2 gap-4'>

            {posts[0].img &&  <Image src={posts[0].img} className='rounded-3xl object-cover h-[80%]' w='895'  ></Image>
            }
                <div className='flex gap-4 items-center '>
                    <h1 className='font-semibold lg:text-xl'>01.</h1>
                    <Link to='/web-design' className='text-blue-800 lg:text-lg' >{posts[0].category}</Link>
                    <span className='text-gray-500'>{format(posts[0].createdAt)}</span>
                </div>
                <Link to={posts[0].slug} className='text-xl font-bold lg:text-3xl'>{posts[0].title}</Link>
            </div>
            {/* others */}
            <div className='w-full  flex flex-col gap-2 lg:w-1/2' >

                {/* second feature */}
                
             {posts[1] &&   <div className='lg:h-1/3  flex justify-between gap-2'>
                   
                    {posts[1].img &&  <div className='w-1/3 aspect-video'>
                    <Image src={posts[1].img} className='rounded-3xl object-cover' w='298' ></Image> </div>}
                        
                   
                    <div className='w-2/3 flex flex-col gap-4'>
                        <div className='flex gap-4 items-center '>
                            <h1 className='font-semibold '>02.</h1>
                            <Link to='/web-design' className='text-blue-800 ' > {posts[1].category} </Link>
                            <span className='text-gray-500'>{format(posts[1].createdAt)}</span>
                        </div>
                        <Link to={posts[1].slug} className='text-xl font-bold '>{posts[1].title}</Link>

                    </div>


                </div>}
                {/* third feature */}
                {posts[2] &&   <div className='lg:h-1/3  flex justify-between gap-2'>
                   
                   {posts[2].img &&  <div className='w-1/3 aspect-video'>
                   <Image src={posts[2].img} className='rounded-3xl object-cover' w='298' ></Image> </div>}
                       
                  
                   <div className='w-2/3 flex flex-col gap-4'>
                       <div className='flex gap-4 items-center '>
                           <h1 className='font-semibold '>02.</h1>
                           <Link to='/web-design' className='text-blue-800 ' > {posts[2].category} </Link>
                           <span className='text-gray-500'>{format(posts[2].createdAt)}</span>
                       </div>
                       <Link to={posts[2].slug} className='text-xl font-bold '>{posts[2].title}</Link>

                   </div>


               </div>}
                {/* fourth feature */}
                {posts[3] &&   <div className='lg:h-1/3  flex justify-between gap-2'>
                   
                   {posts[3].img &&  <div className='w-1/3 aspect-video'>
                   <Image src={posts[3].img} className='rounded-3xl object-cover' w='298' ></Image> </div>}
                       
                  
                   <div className='w-2/3 flex flex-col gap-4'>
                       <div className='flex gap-4 items-center '>
                           <h1 className='font-semibold '>02.</h1>
                           <Link to='/web-design' className='text-blue-800 ' > {posts[3].category} </Link>
                           <span className='text-gray-500'>{format(posts[3].createdAt)}</span>
                       </div>
                       <Link to={posts[3].slug} className='text-xl font-bold '>{posts[3].title}</Link>
                   </div>
               </div>}

            </div>


        </div>





    )
}

export default FeatresPosts