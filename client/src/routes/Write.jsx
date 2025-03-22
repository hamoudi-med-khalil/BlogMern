import { useAuth, useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import { useMutation } from '@tanstack/react-query'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { IKContext, IKUpload } from 'imagekitio-react';
import Upload from '../components/Upload';




const Write = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [cover, setCover] = useState('')
  const [img, setImg] = useState('')
  const [video, setVideo] = useState('')
  const [progress, setProgress] = useState(0)
  const [uploadphoto, setUploadphoto] = useState(false)
  const { isSignedIn, isLoaded } = useUser()
  const { getToken } = useAuth()

  useEffect(()=>{
    img && setValue(prev =>prev+`<p><Image src='${img.url}' /></p>`)
   },[img])


  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken()

      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      )
    },
    onSuccess: (res) => {
      toast.success('Post has been created')
      navigate(`/${res.data.slug}`)
    }
  })
  if (!isLoaded) {
    return <div>Loading...</div>
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should SignIn!</div>
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      img: cover.filePath || '',
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      content: value,
    }
    console.log(data)
    mutation.mutate(data)
  }




  return (
    <div className=' flex flex-col gap-2'>
      <h1 className='text-xl font-light'>Create A New Post</h1>
      <form action="" className='flex flex-col gap-6' onSubmit={handelSubmit}>

        <Upload
          setProgress={setProgress}
          setData={setCover}
          setUploadphoto={setUploadphoto}
          type='image'
        >
          <button className=' w-max bg-white rounded-xl shadow p-2 text-sm text-gray-500'>Add a cover Image</button>
        </Upload>
        <input
          type='text'
          placeholder='My Awesome Story'
          className='bg-transparent text-3xl font-semibold outline-none'
          name='title'

        >
        </input>
        <div className='flex items-center gap-4'>
          <label htmlFor="" className='text-sm'>Categories</label>
          <select
            name="category"
            id="" className='p-2 rounded-xl shadow outline-none'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="developement">Developement</option>
            <option value="databeses">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="description" id="" placeholder='A Short Description...' className='p-4 rounded-xl shadow outline-none'></textarea>
        <div className='flex flex-1'>
          <div className='flex flex-col gap-2 mr-2'>
            <Upload
              setProgress={setProgress}
              setData={setImg}
              setUploadphoto={setUploadphoto}
              type='image'
            >
              📷
            </Upload>
            <Upload
              setProgress={setProgress}
              setData={setVideo}
              setUploadphoto={setUploadphoto}
              type='video'
            >
              📽️
            </Upload>


          </div>
          <ReactQuill
            theme="snow"
            className='flex-1 rounded-xl'
            value={value}
            onChange={setValue}
          />
        </div>
        <button
          className='bg-blue-800 mt-6 text-white p-2 rounded-xl w-36 disabled:cursor-not-allowed disabled:bg-blue-400'
          type='submit'
          disabled={mutation.isPending || (0 > progress && progress < 100)}
        >
          {mutation.isPending ? 'Loading...' : 'send'}
        </button>
        {uploadphoto ? progress + '%' : ''}

        {/* {mutation.isError ? (
          <div>An error occurred: {mutation.error.message}</div>
        ) : null} */}
      </form>
    </div>
  )
}

export default Write