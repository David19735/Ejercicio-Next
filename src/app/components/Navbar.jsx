
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='flex justify-between p-5 bg-slate-300 mb-10 text-black'>
            <Link href="/">Home</Link>

            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar