import React from 'react'
import GetStartCard from './get-start-card'
import { getStartData } from '@/constant/data'

const GetStartSection = () => {
    return (
        <section className='w-full flex flex-col gap-10 relative '>
            <div className='flex flex-col gap-3 text-center'>
                <span className='main-title'>Get started</span>
                <p className='text-[#E2E2E2] text-[24px]'>Eu, molestie commodo, enim pellentesque turpis integer sagittis</p>
            </div>
            <div className='grid grid-cols-4    p-5 z-10 '>
                {
                    getStartData.map((g, index) => <GetStartCard key={index} {...g} />)
                }
            </div>
            <div style={{
                boxShadow: '0px 0px 1px 1px #FB37FF',

            }} className='linear-bg-gradient blur-3xl  absolute top-[220px] w-full h-8'></div>
        </section>
    )
}

export default GetStartSection