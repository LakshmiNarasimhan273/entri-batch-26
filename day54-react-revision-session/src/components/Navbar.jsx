import React, { useState } from 'react'
import { Logs } from 'lucide-react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='bg-blue-700 text-white p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Entri</h1>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>

                <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-2xl'><Logs /></button>

                {/* Mobile Menu */}
                {
                    menuOpen && (
                        <ul className='md:hidden flex flex-col gap-3 mt-4'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Profile</li>
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar