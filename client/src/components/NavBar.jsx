
<<<<<<< HEAD
import React, { useState } from 'react'
import Image from './Image';
import { Link } from 'react-router';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
const NavBar = () => {
    const [open, setOpen] = useState(false)
=======
import React, { useEffect, useState } from 'react'
import Image from './Image';
import { Link } from 'react-router';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const {getToken} = useAuth()

    useEffect(()=>{
        getToken().then((token)=>{
            console.log(token)
        })
    },[])



>>>>>>> 7aa20d9 (React setup)
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/* logo */}
            <Link to='/' className='flex items-center gap-4 font-bold text-2xl'>
                <Image src='./logo.png' className={'rounded-md border-blue-900 border-2'} alt='logo' w={32} h={32}
                />
                <span>RAKEN.</span>
            </Link>

            {/* Mobile */}
            <div className='md:hidden '>
                <div className='cursor-pointer font-bold text-5xl' onClick={() => setOpen((prev) => !prev)}>
                    {open ? 'X' : '='}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-transform duration-500 transform ${open ? 'right-0' : 'translate-x-full'}`} >
                    <Link to="">Home</Link>
                    <Link to="">Trending</Link>
                    <Link to="">Most Popular</Link>
                    <Link to="">About</Link>
                    <Link to="">
                        <button className='bg-blue-800 px-4 py-2 rounded-3xl text-white'>Login 👌</button>
                    </Link>
                </div>
            </div>

            {/* Desktop */}
            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                <Link to="">Home</Link>
                <Link to="">Trending</Link>
                <Link to="">Most Popular</Link>
                <Link to="">About</Link>
               
                <SignedOut>
                <Link to="/login">
                    <button className='bg-blue-800 px-4 py-2 rounded-3xl text-white'>Login 👌</button>
                </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

        </div>
    )
}

export default NavBar

