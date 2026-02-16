import React from 'react'
import { navLinks } from '../data/navbarData';

function Navbar() {
    return (
        <nav className='bg-gray-800 text-white p-4 shadow-md'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Companies</h1>

                <ul className='flex gap-4'>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;


{/* <li><a href="">Google</a></li>
                <li><a href="">Microsoft</a></li>
                <li><a href="">Zoho</a></li>
                <li><a href="">Amazon</a></li>
                <li><a href="">CTS</a></li> */}