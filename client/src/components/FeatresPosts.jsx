import React from 'react'
import Image from './Image'
import { Link } from 'react-router'

const FeatresPosts = () => {
    return (
        <div className='mt-8 flex flex-col gap-4 lg:flex-row '>
            {/* first feature */}
            <div className='w-full  lg:flex flex-col lg:w-1/2 gap-4'>
                <Image src='featured1.jpeg' className='rounded-3xl object-cover h-[80%]' w='895'  ></Image>
                <div className='flex gap-4 items-center '>
                    <h1 className='font-semibold lg:text-xl'>01.</h1>
                    <Link to='/web-design' className='text-blue-800 lg:text-lg' >Web Design</Link>
                    <span className='text-gray-500'>2 days ago</span>
                </div>
                <Link to='/test' className='text-xl font-bold lg:text-3xl'>Lorem, ipsum dolor. Lorem ipsum dolor sit. </Link>
            </div>
            {/* others */}
            <div className='w-full  flex flex-col gap-2 lg:w-1/2' >

                {/* second feature */}
                <div className='lg:h-1/3  flex justify-between gap-2'>
                    <div className='w-1/3 aspect-video'>
                        <Image src='featured2.jpeg' className='rounded-3xl object-cover' w='298' ></Image>
                    </div>
                    <div className='w-2/3 flex flex-col gap-4'>
                        <div className='flex gap-4 items-center '>
                            <h1 className='font-semibold '>02.</h1>
                            <Link to='/web-design' className='text-blue-800 ' >Web Design</Link>
                            <span className='text-gray-500'>2 days ago</span>
                        </div>
                        <Link to='/test' className='text-xl font-bold '>Lorem, ipsum dolor. Lorem ipsum dolor sit. </Link>

                    </div>


                </div>
                {/* third feature */}
                <div className='lg:h-1/3  flex justify-between gap-2'>
                    <div className='w-1/3 aspect-video'>
                        <Image src='featured2.jpeg' className='rounded-3xl object-cover' w='298' ></Image>
                    </div>                    <div className='w-2/3 flex flex-col gap-4'>
                        <div className='flex gap-4 items-center '>
                            <h1 className='font-semibold '>03.</h1>
                            <Link to='/web-design' className='text-blue-800 ' >Web Design</Link>
                            <span className='text-gray-500'>2 days ago</span>
                        </div>
                        <Link to='/test' className='text-xl font-bold '>Lorem, ipsum dolor. Lorem ipsum dolor sit. </Link>

                    </div>

                </div>
                {/* fourth feature */}
                <div className='lg:h-1/3  flex justify-between gap-2 '>
                    <div className='w-1/3 aspect-video'>
                        <Image src='featured2.jpeg' className='rounded-3xl object-cover' w='298' ></Image>
                    </div>                    <div className='w-2/3 flex flex-col gap-4'>
                        <div className='flex gap-4 items-center '>
                            <h1 className='font-semibold '>04.</h1>
                            <Link to='/web-design' className='text-blue-800 ' >Web Design</Link>
                            <span className='text-gray-500'>2 days ago</span>
                        </div>
                        <Link to='/test' className='text-xl font-bold'>Lorem, ipsum dolor. Lorem ipsum dolor sit. </Link>

                    </div>

                </div>

            </div>


        </div>





    )
}

export default FeatresPosts