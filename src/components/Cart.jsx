import React from 'react'

const Cart = (props) => {
  return (
    <div className='z-10 absolute top-0 right-0 w-1/2 md:w-1/3 h-[100vh] bg-[#00ADB5]' >
        Cart
        <i onClick={props.func} className="fa-solid fa-xmark fa-lg fa-spin fa-spin-reverse "></i>
    </div>
  )
}

export default Cart