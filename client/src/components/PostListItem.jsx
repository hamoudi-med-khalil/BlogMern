import React from 'react'
import Image from './Image'
import { Link } from 'react-router'
<<<<<<< HEAD

const PostListItem = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-8'>
            <div className='md:hidden xl:block xl:w-1/3'><Image src='/postImg.jpeg' className='rounded-2xl object-cover' /></div>
            <div className='flex flex-col gap-4 xl:w-2/3'>
                <Link to='/test' className='font-semibold text-4xl'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Link>
                <div className='flex flex-row items-center gap-2 text-sm '>
                    <span>Writen By :</span>
                    <Link className='text-blue-700'>Joe Doe</Link>
                    <span>on</span>
                    <Link className='text-blue-700'>Web Design</Link>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis nihil quia dignissimos cupiditate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis nihil quia dignissimos cupiditate.
                </p>
                <Link to='/test' className=' underline text-blue-800 text-sm'> Read More</Link>
=======
import {format} from 'timeago.js'

const PostListItem = ({post}) => {
    return (
        <div className='flex flex-col xl:flex-row gap-8 mb-4'>
            {post.img &&<div className='md:hidden xl:block xl:w-1/3'>
            <Image src={post.img} className='rounded-2xl object-cover' />
            </div>}
            <div className='flex flex-col gap-4 xl:w-2/3'>
                <Link to={`/${post.slug}`} className='font-semibold text-4xl'>{post.title} </Link>
                <div className='flex flex-row items-center gap-2 text-sm '>
                    <span>Writen By :</span>
                    <Link to={`/posts?author=${post.user.username}`}className='text-blue-700'>{post.user.username}</Link>
                    <span>on</span>
                    <Link to={`/posts?category=${post.category}`} className='text-blue-700'>{post.category}</Link>
                    <span>{format(post.createdAt)}</span>
                </div>
                <p>
                    {post.description}
                </p>
                <Link to={`/${post.slug}`} className=' underline text-blue-800 text-sm'> Read More</Link>
>>>>>>> 7aa20d9 (React setup)
            </div>



        </div>
    )
}

export default PostListItem