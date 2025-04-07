import React from 'react'
import headerImage from '../../public/header.png'
import heartImage from '../../public/heart.png'
import Image from 'next/image'
const Header = () => {
    return (
        <section className='flex justify-between  items-center w-full'>
            <div className='flex flex-col  items-start gap-4 w-[55%]'>
                <p className='text-white text-7xl w-[92%]'>
                    Discover, collect, and charity in extraordinary NFT marketplace
                </p>
                <p className='text-[#E2E2E2] text-[30px] w-[80%]'>
                    In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis
                </p>
                <div className='flex gap-8'>
                    <button className='text-2xl linear-bg-gradient  px-14 py-3 rounded-lg'>Explore</button>
                    <button className='text-2xl border-2 border-[var(--text-color)] text-[var(--text-color)] px-14 py-3 rounded-lg'>create</button>
                </div>
            </div>
            <div
                class="card  h-auto p-[1px]   rounded-3xl   linear-border-gradient w-[34%] "
            >
                <div class="card-content flex  rounded-3xl   flex-col gap-5  p-5 relative z-20 bg-[var(--background)]  ">
                    <Image src={headerImage} alt='header' width={'100%'} height={400} />
                    <div className='flex justify-between items-center'>
                        <div className='flex  items-center  gap-2'>
                            <Image src={headerImage} alt='header' width={42} height={42} className='rounded-full' />
                            <div className='flex flex-col gap-1'>
                                <span className='text-white text-[10px]'>Laura</span>
                                <span className='text-[#D7D7D7] text-[10px]'>0.21 Weth</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-white  text-[10px]'>WE ARE HERE</span>
                            <span className='text-[#E0E0E0] text-[10px] flex justify-end gap-2 items-center'>
                                <Image src={heartImage} alt='header' width={20} height={20} />
                                <span>25</span>
                            </span>
                        </div>
                    </div>
                    <div style={{
                        boxShadow: '0px 0px 190px 30px #FB37FF',
                        backgroundColor: '#FB37FF',
                    }} className="blur-2xl absolute top-[-50px] left-[-50px] w-[50px] h-[50px]   pointer-events-none rounded-full"></div>
                    <div style={{
                        boxShadow: '0px 0px 190px 30px #18B2DE',
                        backgroundColor: '#18B2DE',
                    }} className="blur-2xl absolute bottom-[-50px] right-[-50px] w-[50px] h-[50px] bg-[var(--secondary)] pointer-events-none rounded-full"></div>
                </div>
            </div>
        </section>

    )
}

export default Header