import React from 'react'
import Image from './Image'
import PostListItem from './PostListItem'
<<<<<<< HEAD

const PostList = () => {
  return (
    <div className='flex flex-col gap-12 mb-8'>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
    </div>
=======
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router'

const fetchPosts = async (pageParam , searchParams) => {
  const searchParamsObjct = Object.fromEntries([...searchParams])
  console.log(searchParamsObjct)
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParam,
      limit: 10,
      ...searchParamsObjct,
    }
  })
  return res.data
}


const PostList = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts', searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam ,searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  })
  console.log(data)
if (status === 'loading') return 'Loading...'

  if (status === 'error') return 'An error has occurred '
  const allPosts = data?.pages?.flatMap((page) => page.posts) || []

  return (
<InfiniteScroll
  dataLength={allPosts.length} //This is important field to render the next data
  next={fetchNextPage}
  hasMore={!!hasNextPage}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
 
> 
{allPosts.map((post) =>( 
        <PostListItem key={post.id} post={post} />
      ))}

</InfiniteScroll>
   
     
    
>>>>>>> 7aa20d9 (React setup)
  )
}

export default PostList