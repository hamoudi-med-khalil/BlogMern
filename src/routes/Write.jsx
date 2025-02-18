import { useUser } from '@clerk/clerk-react'
import React from 'react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';



const Write = () => {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return <div>Loading...</div>
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should SignIn!</div>
  }

  return (
    <div className=' flex flex-col gap-2'>
      <h1 className='text-xl font-light'>Create A New Post</h1>
      <form action="" className='flex flex-col gap-6'>
        <button className=' w-max bg-white rounded-xl shadow p-2 text-sm text-gray-500'>Add a cover Image</button>
        <input type='text'placeholder='My Awesome Story' className='bg-transparent text-3xl font-semibold outline-none'></input>
        <div className='flex items-center gap-4'>
          <label htmlFor="" className='text-sm'>Categories</label>
          <select name="cat" id="" className='p-2 rounded-xl shadow outline-none'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="developement">Developement</option>
            <option value="databeses">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>          
          </select>
        </div>
        <textarea name="desc" id="" placeholder='A Short Description...' className='p-4 rounded-xl shadow outline-none'></textarea>
        <ReactQuill theme="snow" className='flex-1 rounded-xl ' />
        <button className='bg-blue-800 text-white p-2 rounded-xl w-36'>Send</button>
      </form>
    </div>
  )
}

export default Write