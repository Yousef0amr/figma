import React from 'react'
import arrowImage from '../../public/arrowRight.png'
import Image from 'next/image'

import { auctionsData } from '@/constant/data'
import CustomCard from './cutom-card'
const AuctionSection = () => {
    return (
        <section className='w-full flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <span className='main-title'>Hot auctions</span>
                <button className='border-none flex justify-evenly items-center gap-3  text-[#D7D7D7] px-6 py-1 rounded-lg'>
                    <span className='text-[24px]'>View all</span>
                    <Image src={arrowImage} alt='arrow' width={20} height={20} />
                </button>
            </div>
            <div className='grid grid-cols-4  gap-6'>
                {
                    auctionsData.map(
                        (a, index) => <CustomCard key={index} {...a} />
                    )
                }
            </div>

        </section>
    )
}

export default AuctionSection