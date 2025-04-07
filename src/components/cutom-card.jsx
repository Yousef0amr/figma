import Image from 'next/image'
import React from 'react'

const CustomCard = ({
    image,
    title,
    price,
    time,
    buttonText
}) => {
    return (
        <div className='card flex flex-col gap-3 '>
            <Image src={image} alt='header' width={'100%'} height={350} />
            <div className='flex justify-between items-center text-white'>
                <span>{title}</span>
                <span>{price} Weth</span>
            </div>
            <div className='h-[1px] w-full bg-[#C4C4C4]'></div>
            <div className='flex justify-between items-center '>
                <span className='text-white ' >
                    <span className='text-[#BCBCBC] mr-1'>
                        Ends in
                    </span>{time}</span>
                <button className='text-[#E2E2E2] border-2 border-[var(--text-color)] px-5 rounded-lg'>{buttonText}</button>
            </div>
        </div>
    )
}

export default CustomCard
