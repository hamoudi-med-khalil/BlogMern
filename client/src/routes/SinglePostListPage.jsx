import React from 'react'
import Image from '../components/Image'
<<<<<<< HEAD
import { Link } from 'react-router'
import SinglePostActions from '../components/SinglePostActions'
import Search from '../components/Search'
import Comments from '../components/Comments'

const SinglePostListPage = () => {
=======
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
  
  


>>>>>>> 7aa20d9 (React setup)
  return (
    <div className='flex flex-col gap-4 my-6'>
      {/*Details */}
      <div className='flex gap-2'>
        <div className='flex flex-col gap-8 lg:w-3/5'>
<<<<<<< HEAD
          <h1 className='font-bold text-xl md:text-3xl xl:text-5xl 2xl:text-6xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet.</h1>
          <div className='flex flex-row items-center gap-2 text-sm '>
            <span>Writen By :</span>
            <Link className='text-blue-700'>Joe Doe</Link>
            <span>on</span>
            <Link className='text-blue-700'>Web Design</Link>
          </div>
          <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque est aliquam quam optio. Culpa nostrum nisi voluptatum architecto sapiente! Tempore vel vero pariatur autem consequatur delectus officia beatae dolor.</p>
        </div>

        <div className='hidden lg:block w-2/5'>
          <Image src='/postImg.jpeg' className='rounded-2xl'
            w='600' />
        </div>
=======
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
>>>>>>> 7aa20d9 (React setup)

      </div>

      {/*Content */}
      <div className='flex flex-col md:flex-row gap-28 '>
        <div className='flex gap-4'>
          <div className='text-lg text-justify'>
<<<<<<< HEAD
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <Image src='/featured1.jpeg' className=' object-cover m-auto rounded-3xl my-4' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae asperiores laboriosam provident eius nobis fugiat fugit, hic voluptas harum ipsum in adipisci beatae nisi repellendus alias. Nemo, labore dolorum.</p>
=======
            <p> {data.content} </p>
>>>>>>> 7aa20d9 (React setup)
          </div>
          <div className='h-max sticky px-4 top-8 bg-blue-100 py-9'>
            <h1 className=" mb-4 text-sm font-bold">Author</h1>
            <div className='flex flex-col gap-4'>
<<<<<<< HEAD
              <div className='flex items-center gap-8'>
                <Image src='/userImg.jpeg' className='w-12 h-12 rounded-full object-cover' w='48' h='48' />
                <Link className='text-blue-700 '>Joe Doe</Link>
              </div>
=======
              { data.user.img && <div className='flex items-center gap-8'>
                <Image src={data.user.img} className='w-12 h-12 rounded-full object-cover' w='48' h='48' />
                <Link className='text-blue-700 '>{data.user.username}</Link>
              </div>}
>>>>>>> 7aa20d9 (React setup)
              <p className='text-gray-500'> Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-4'>
                <Link> <Image src='/instagram.svg' /> </Link>
                <Link> <Image src='/facebook.svg' /> </Link>
              </div>
<<<<<<< HEAD
              <SinglePostActions />
=======
              <SinglePostActions post={data} />
>>>>>>> 7aa20d9 (React setup)
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
<<<<<<< HEAD
      <Comments />
=======
      <Comments postId={data._id}/>
>>>>>>> 7aa20d9 (React setup)
    </div>

  )
}

export default SinglePostListPage