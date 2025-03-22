import React from 'react'
import { Link, useParams } from 'react-router'
import Image from './Image'
import { format } from 'timeago.js'
import { useAuth, useUser } from '@clerk/clerk-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Comments from './Comments'
import { toast } from 'react-toastify'
import axios from 'axios'


const Comment = ({ comment, postId }) => {
    const { user } = useUser()
    const { getToken } = useAuth()
    const role = user?.publicMetadata?.role




    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async () => {
            const token = await getToken()
            return axios.delete(`${import.meta.env.VITE_API_URL}/comments/${comment._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        },
        onSuccess: () => {
            toast.success('post Deleted')
            queryClient.invalidateQueries({ queryKey: ['comments', postId] })
        },
        onError: (error) => {
            toast.error(error.response.data)
        }
    })


    return (
        <div className='flex flex-col w-full bg-white rounded-xl mt-4 mb-8 p-4'>
            <div className='flex items-center gap-2 mb-4'>
                {comment.user.img && <Image src={comment.user.img} className='w-10 h-10 rounded-full object-cover' w='40' />}
                <span className='text-blue-700 '>{comment.user.username}</span>
                <span className='text-sm text-gray-500'>{format(comment.createdAt)}</span>
                {user && (comment.user.username === user.username || role === 'admin') &&
                    <span className='text-sm text-red-300 hover:text-red-500 cursor-pointer' onClick={() => mutation.mutate()}>Delete
                        {mutation.isPending && <span>(in Progress)</span>}</span>
                }
            </div>

            <p className='text-justify '>
                {comment.description}
            </p>


        </div>
    )
}

export default Comment