import React, { useState } from 'react'

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    return (
        <header className='bg-pink-600 text-white md:px-20 py-6'>
            <nav className='md:flex justify-between'>
                <div className='flex justify-between items-center px-4 md:px-0' >
                    <h1 className='text-2xl font-[cursive]'>Ecom App</h1>
                    <button className={menu ? 'hidden' : 'md:hidden'} onClick={() => { setMenu(true) }} ><i class="fa-solid fa-bars"></i></button>
                    <button className={menu ? 'flex md:hidden' : 'hidden'} onClick={() => { setMenu(false) }} >X</button>
                </div>
                <ul className={menu ? 'py-6 md:py-0 absolute md:relative w-full bg-pink-600/70 backdrop-blur-md flex flex-col md:flex-row justify-center items-center gap-4' : 'hidden md:flex flex-col md:flex-row justify-center items-center gap-4'}>
                    <li>ELECTRONICS</li>
                    <li>CLOTHING</li>
                    <li>BEAUTY</li>
                    <li>GROCERY</li>
                    <li>HEALTH</li>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:pl-8'>
                        <li className=''>MY CART</li>
                        <li>MY ACCOUNT</li>
                    </div>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar