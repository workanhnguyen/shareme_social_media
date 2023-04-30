import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import share from '../assets/share.mp4';
import logowhite from '../assets/logowhite.png';
import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {

    const decoded = jwt_decode(response.credential);
    localStorage.setItem('user', JSON.stringify(decoded));

    const { name, sub, picture } = decoded;
    const doc = {
      _id: sub,
      _type: 'user',
      username: name,
      imgUrl: picture,
    };

    client.createIfNotExists(doc)
    .then(() => {
      navigate('/', { replace: true })
    })
    console.log(decoded)
  };

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
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
              <GoogleLogin
                onSuccess={(response) => responseGoogle(response)}
                onError={(response) => responseGoogle(response)}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login