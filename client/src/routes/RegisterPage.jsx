import { SignUp } from '@clerk/clerk-react'

const RegisterPage = () => {
  return (
    <div className='h-[calc(100vh-80px)] flex items-center justify-center gap: 0.4rem '>
      <SignUp signInUrl='/login' />
      
    </div>
  )
}

export default RegisterPage