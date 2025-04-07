import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-3 uppercase'>
            <h1 className='text-2xl linear-text-gradient '>Gaslur</h1>
            <ul className='flex gap-4 text-sm text-[var(--text-color)]'>
                <li className='linear-text-gradient border-b-2 border-[var(--primary)]'>HOME</li>
                <li>My profile</li>
                <li>activity</li>
                <li>how it works</li>
            </ul>
            <div className='flex gap-2'>
                <button className='border-2 border-[var(--text-color)] text-[var(--text-color)] px-6 py-1 rounded-lg'>Create</button>
                <button className=' text-[var(--text-color)] px-6 py-1 rounded-lg'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar