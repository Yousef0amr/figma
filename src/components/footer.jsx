import React from 'react'
import Image from 'next/image'
import facebookImage from '../../public/facebook.png'
import instagramImage from '../../public/instagram.png'
import twitterImage from '../../public/twitter.png'
const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-[120px] mb-[120px]">
            <div className='flex  gap-[120px]'>
                <p className='text-white text-4xl leading-12  '>Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.</p>
                <div className='flex gap-[100px]'>
                    <div className='flex flex-col gap-12 items-start'>
                        <span className='text-white text-4xl'>Marketplace</span>
                        <ul className='text-[#D7D7D7] flex flex-col gap-4    text-[24px]'>
                            <li>Home</li>
                            <li>Activity</li>
                            <li>Discover</li>
                            <li>Learn more</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-12 items-start'>
                        <span className='text-white text-4xl'>Company</span>
                        <ul className='text-[#D7D7D7] flex flex-col gap-4 text-[24px]'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-12 items-start'>
                        <span className='text-white text-4xl'>Contact</span>
                        <ul className='text-[#D7D7D7] flex flex-col gap-4 text-[24px]'>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Email</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-[1px] w-full bg-[#C4C4C4]'></div>
            <div className='flex justify-between w-full '>
                <ul className='flex gap-[20px]'>
                    <li>
                        <Image src={instagramImage} alt='header' width={24} height={24} />
                    </li>
                    <li>
                        <Image src={facebookImage} alt='header' width={24} height={24} />
                    </li>

                    <li>
                        <Image src={twitterImage} alt='header' width={24} height={24} />
                    </li>

                </ul>
                <span className='text-[#828282]'>
                    Copyright 2021 Gaslur
                </span>
            </div>
        </footer>
    )
}

export default Footer
