import React from 'react'
import Comment from './Comment'
<<<<<<< HEAD

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
=======
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth, useUser } from '@clerk/clerk-react'
import { toast } from 'react-toastify'

const fetchComments = async (postId) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
  console.log(res.data)
  return res.data
}


const Comments = ({ postId }) => {

  const { getToken } = useAuth()
  const { user } = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId)
  })


  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken()

      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments', postId],
      })
    },
    onError: (error) => {
      toast.error(error.res.data)
    }
  })

  if (isPending) { return 'loading..' }
  if (!data) { return 'comment not found' }
  if (error) { return 'Some thing went wrong!!' }

  const handelSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      description: formData.get('description'),
      post: postId,
    }
    mutation.mutate(data)
  }

  return (
    <div className=' w-3/5 mt-8 flex flex-col gap-8 mb-12'>
      <h1 className='text-xl font-semibold mb-4'>Comments</h1>
      <form onSubmit={handelSubmit} className='flex justify-between gap-12 items-center'>
        <textarea className='w-full bg-white rounded-xl text-gray-500 p-4' placeholder='Write a comment...' typeof='text' name='description' />
        <button className='bg-blue-800 text-white px-4 py-2 rounded-xl'>Send</button>
      </form>

      
        <>
          {mutation.isPending &&
           <Comment comment={{
            description: `${mutation.variables.description} (sending..) `,
            createdAt: new Date(),
            user: {
              username: user.username,
              img: user.img
            }
          }} />}
        </>
      


      {data.map((comment) => (
        <Comment key={comment._id} comment={comment} postId={postId} />
      ))}

>>>>>>> 7aa20d9 (React setup)
    </div>
  )
}

<<<<<<< HEAD
export default Comments
=======
export default Comments

>>>>>>> 7aa20d9 (React setup)
