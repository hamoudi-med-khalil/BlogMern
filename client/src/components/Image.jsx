import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = ({ src, className, w, h, alt }) => {
    if (!src) {
        return <img src="/path/to/default-image.jpg" alt="Default image" className={className} width={w} height={h} />;
    } return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            path={src}
            alt={alt}
            className={className}
            loading='lazy'
            lqip={{ active: true, quality: 20 }}
            width={w}
            height={h}
            transformation={[
                {
                    width: w,
                    height: h,
                }
            ]}
        />


    )
}

export default Image