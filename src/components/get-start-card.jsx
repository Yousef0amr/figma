import Image from 'next/image'
import React from 'react'

const GetStartCard = ({
    image,
    title
}) => {
    return (
        <div className='flex flex-col gap-6 items-center justify-center'>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.09)'
            }} className='shadow-[inset_-5px_5px_5px_-5px_#FFFFFF] card flex justify-center items-center p-[40px] rounded-3xl '>
                <Image src={image} alt='header' width={40} height={40} />
            </div>
            <p className='text-white '>{title}</p>
        </div>
    )
}

export default GetStartCard