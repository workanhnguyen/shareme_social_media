import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import share from '../assets/share.mp4';
import logo from '../assets/logo.png';
import logowhite from '../assets/logowhite.png';

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={share} 
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logowhite} width="130px" alt="logo" />
          </div>

          <div className='shadow-2xl'>
            <GoogleLogin
              clientId=''
              render={(renderProps) => (
                <button
                  type='button'
                  className='bg-mainColor'
                >
                  <FcGoogle className='mr-4'/>
                  Sign in with Google
                </button>
              )} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login