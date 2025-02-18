import React from 'react'
const Filters = () => {
    return (
        <div className='w-full'>
            <h1 className="mt-8 mb-4 text-sm font-bold">Filters</h1>
            <div className='w-full'>
                <label htmlFor="" className='flex items-center gap-2 text-md cursor-pointer'>
                    <input
                        type="radio"
                        value='newest'
                        name='sort'
                        id='newest'
                        className='appearance-none border-blue-800 border-[1.5px] bg-white rounded w-4 h-4 checked:bg-blue-800 cursor-pointer'
                    />
                    Newest
                </label>
                <label htmlFor="" className='flex items-center gap-2 text-md'>
                    <input
                        type="radio"
                        value='most-popular'
                        name='sort'
                        id='most-popular'
                        className='appearance-none border-blue-800 border-[1.5px] bg-white rounded w-4 h-4 checked:bg-blue-800 cursor-pointer'
                    />
                    Most Popular
                </label>
                <label htmlFor="" className='flex items-center gap-2 text-md'>
                    <input
                        type="radio"
                        value='trending'
                        name='sort'
                        id='trending'
                        className='appearance-none border-blue-800 border-[1.5px] bg-white rounded w-4 h-4 checked:bg-blue-800 cursor-pointer'
                    />
                    Trending
                </label>
                <label htmlFor="" className='flex items-center gap-2 text-md'>
                    <input
                        type="radio"
                        value='oldest'
                        name='sort'
                        id='oldest'
                        className='appearance-none border-blue-800 border-[1.5px] bg-white rounded w-4 h-4 checked:bg-blue-800 cursor-pointer'
                    />
                    Oldest
                </label>
            </div>


        </div>
    )
}

export default Filters