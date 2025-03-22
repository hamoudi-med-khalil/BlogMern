import { IKContext, IKUpload } from 'imagekitio-react'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'

const Upload = ({children, setProgress,setData,setUploadphoto, type}) => {
    const authenticator = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);
    
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
          }
    
          const data = await response.json();
          const { signature, expire, token } = data;
          return { signature, expire, token };
        } catch (error) {
          throw new Error(`Authentication request failed: ${error.message}`);
        }
      };


    const onError = (err) => {
        console.log(err)
        toast.error('image upload failed!')
    }
    const onSuccess = (res) => {
        console.log(res)
        setData(res)

    }
const uploadPhoto = (e) =>{
    setUploadphoto(true)
}

    const onUploadProgress = (res) => {
        console.log(res)
        uploadPhoto()
        setProgress(Math.round((res.loaded / res.total) * 100))
    }
    const ref = useRef()

    return (
        <IKContext
        publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        authenticator={authenticator} >
        <IKUpload
          hidden
          useUniqueFileName
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={onUploadProgress}
          accept={`${type}/*`}
          ref={ref}
        />
        <div className='cursor-pointer' onClick={()=> {ref.current.click()}}>
             {children}
        </div>
       
      </IKContext>
    )
}

export default Upload