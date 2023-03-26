import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#222831] h-screen flex justify-center items-center flex-col'>
        <form className='flex flex-col gap-4 w-[300px]'>
            <div className='flex justify-center'>
            <img className='h-28' src="/logo.jpg" alt="Logo" />
            </div>
            <div className='flex flex-col'>
            <label className='text-white font-medium text-lg'>Email</label>
            <input className='outline-none px-4 py-2' type="email" placeholder='Enter Your Email' required/>
            </div>
            <div className='flex flex-col'>
            <label className='text-white font-medium text-lg'>Password</label>
            <input className='outline-none px-4 py-2' type="password" placeholder='Enter Your Password' required/>
            </div>
            <input className='bg-[#00adb5] text-lg text-white font-medium px-4 py-2 mt-2 cursor-pointer hover:bg-[#00adb5]/80' type="submit" value="Login" />
            <input className='text-white font-medium text-right cursor-pointer hover:text-white/80' type="button" value="Register?" />
        </form>
        <div className="absolute bottom-0 text-white w-full flex justify-center items-center my-4" >
                <span>Made with ❤️ by Jitender Kumar</span>
            </div>
    </div>
  )
}

export default Login