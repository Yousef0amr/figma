import React from 'react'
import Image from 'next/image'
import filterImage from '../../public/filter.png'
import arrowBottom from '../../public/arrowBottom.png'
import dropImage from '../../public/drop.png'
import { discoverData } from '@/constant/data'
import CustomCard from './cutom-card'
const DiscoverSection = () => {
    return (
        <section className='w-full flex flex-col gap-14'>
            <div className='flex justify-between items-center'>
                <span className='main-title'>Discover</span>
                <div className='flex gap-2'>
                    <button className='border-none flex justify-evenly items-center gap-3  text-white px-6 py-1 rounded-lg'>
                        <Image src={dropImage} alt='arrow' width={20} height={20} />
                        <span className='text-[24px]'>Category</span>
                    </button>
                    <button className='border-none flex justify-evenly items-center gap-3  text-white px-6 py-1 rounded-lg'>
                        <span className='text-[24px]'>Cheapest</span>
                        <Image src={arrowBottom} alt='arrow' width={20} height={20} />
                    </button>
                    <button className='border-none flex justify-evenly items-center gap-3  text-white px-6 py-1 rounded-lg'>
                        <span className='text-[24px]'>Newest</span>
                        <Image src={arrowBottom} alt='arrow' width={20} height={20} />
                    </button>
                    <button className='linear-bg-gradient  flex justify-evenly items-center gap-3  text-white px-8 py-1 rounded-lg'>
                        <Image src={filterImage} alt='arrow' width={20} height={20} />
                        <span className='text-[24px]'>Filter</span>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4  grid-rows-2 gap-6 gap-y-14'>
                {
                    discoverData.map(
                        (d, index) => <CustomCard key={index} {...d} />
                    )
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-[#BCBCBC] border-2 border-[var(--text-color)] px-8 py-2 rounded-lg'>Load more</button>
            </div>
        </section>
    )
}

export default DiscoverSection
