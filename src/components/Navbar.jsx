import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

const Navbar = () => {

    const [show, setShow] = useState(false)

    if(show) {
        document.body.style.overflow = 'hidden'
        window.scrollTo(0, 0)
    }else {
        document.body.style.overflow = 'auto'
    }

    const variants = {
        up: { y: 0, transition: { type: 'spring', duration: 0.7, delay: 0 } },
        stop: { y: 1000, transition: { repeat: Infinity, repeatDelay: 3 } }
    };

    return (
        <>
        {/* Mobile Navbar... */}

            <header className='nav w-full pt-2 lg:hidden' >
                <nav className='flex justify-center items-center flex-col border-b-2 border-white pb-2' >
                    <img className='h-16' src="/logo.jpg" alt="logo" />
                    <div className='absolute right-6' >
                        <i onClick={() => setShow(!show)} className="fa-solid fa-bars-staggered fa-lg fa-shake ico-anim"></i>
                    </div>
                </nav>
                    <AnimatePresence>
                        <motion.ul variants={{ up: { x: 0 , transition: { type: 'spring', duration: 0.5, delay: 0 } }, stop: { x: 10,  }, }} animate={show ? 'up' : 'stop'} className={show ? 'absolute top-0 right-0 h-[100vh] w-[80vw] bg-[#00ADB5] flex flex-col justify-start items-center gap-8 pt-20' : 'hidden'} >
                    <div className='absolute top-[30px] right-[28px]' >
                        <i onClick={() => setShow(!show)} className="fa-solid fa-xmark fa-lg fa-spin fa-spin-reverse "></i>
                    </div>
                            <div className='flex gap-2' >
                            <i className="fa-solid fa-user fa-lg cursor-pointer"></i>
                            <i class="fa-solid fa-cart-shopping fa-lg cursor-pointer"></i>
                            </div>
                            <li className=''>Home</li>
                            <li className=''>Home</li>
                            <li className=''>Home</li>
                            <li className=''>Home</li>
                        </motion.ul>
                    </AnimatePresence>
            </header>

        {/* Desktop Navbar... */}

            <header className='nav w-full py-2 px-32 hidden lg:block' >
                <nav className='flex justify-between items-center' >
                    <img className='h-16' src="/logo.jpg" alt="logo" />
                    <form className='hidden xl:flex '>
                        <i className="fa-solid fa-magnifying-glass  border-2 border-white px-4 rounded-l-full py-2 tealbg"></i>
                        <input className='text-black border-2 border-white outline-none py-1 px-2 w-[300px]' type="text" placeholder='Search item' />
                        <input className='py-1 px-4 border-2 border-white rounded-r-full tealbg cursor-pointer' type="submit" value="Search" />
                    </form>
                        <ul  className='flex justify-center items-center gap-8' >
                            <div className='flex justify-center items-center gap-4'>
                                <div className='px-2 py-1 flex items-center gap-2 cursor-pointer' >
                                    <i class="fa-solid fa-house fa-lg cursor-pointer"></i>
                                    <span className='underline underline-offset-4 usr'>Home</span>
                                </div>
                                <div className='px-2 py-1 flex items-center gap-2 cursor-pointer' >
                                    <i class="fa-solid fa-store fa-lg cursor-pointer"></i>
                                    <span className='underline underline-offset-4 usr'>Categories</span>
                                </div>
                                <div className='px-2 py-1 flex items-center gap-2 cursor-pointer relative' >
                                    <i class="fa-solid fa-cart-shopping fa-lg cursor-pointer"></i>
                                    <span className='underline underline-offset-4 usr'>Cart</span>
                                    <span className='text-white bg-[#00ADB5] px-1 rounded-full text-sm' >0</span>
                                </div>
                                <div className='px-2 py-1 flex items-center gap-2 cursor-pointer' >
                                    <i className="fa-solid fa-user fa-lg cursor-pointer"></i>
                                    <span className='underline underline-offset-4 usr'>User</span>
                                </div>
                            </div>
                        </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar