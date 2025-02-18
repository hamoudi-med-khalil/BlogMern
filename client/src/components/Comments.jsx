import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className=' w-3/5 mt-8 flex flex-col gap-8'>
        <h1 className='text-xl font-semibold mb-4'>Comments</h1>
        <div className='flex justify-between gap-12 items-center'>
            <textarea className='w-full bg-white rounded-xl text-gray-500 p-4' placeholder='Write a comment...' typeof='text' />
            <button className='bg-blue-800 text-white px-4 py-2 rounded-xl'>Send</button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments