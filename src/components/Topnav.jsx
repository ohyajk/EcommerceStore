import React from 'react'

const Topnav = () => {
    return (
        <div className='tealbg py-2 text-white hidden md:flex px-2 md:px-32 items-center justify-between'>
            <div className='flex gap-2 md:gap-4 items-center'>
                <i className="fa-solid fa-envelope fa-lg"></i>
                <i className="fa-solid fa-phone"></i>
            </div>
            <div className='flex gap-2 md:gap-4 items-center'>
                <i className="fa-brands fa-facebook fa-lg"></i>
                <i className="fa-brands fa-instagram fa-lg"></i>
                <i className="fa-brands fa-twitter fa-lg"></i>
                <i className="fa-brands fa-youtube fa-lg"></i>
            </div>
        </div>
    )
}

export default Topnav