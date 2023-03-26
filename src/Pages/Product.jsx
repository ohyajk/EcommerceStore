import React from 'react'
import { useDispatch} from 'react-redux';
import { increment } from '../store/cartSlice/cartSlice';

const Product = () => {

  const dispatch = useDispatch()

  return (
    <section className='flex justify-center items-center'>
      <div className='flex justify-center gap-8 px-32 py-16'>
        <div className='p-8 border-2 border-black/20'>
          <img src="https://dummyimage.com/400x400" alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xl font-semibold w-fit'>Category</h4>
          <h1 className='text-4xl font-bold w-fit'>Product Name</h1>
          <div className='flex justify-start gap-2'>
            <span className='w-fit'>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </span>
            <h6>3.9 Rating</h6>
          </div>
          <span className='text-xl font-semibold py-2 w-fit'>$10</span>
          <p className="max-w-[400px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, iure. Error nobis et adipisci neque ea reprehenderit</p>
          <div className='flex items-center justify-start gap-4 py-4'>
            <span className='flex items-center gap-2 py-2  px-4 border-2 border-black/20'><i className="fa-solid fa-minus"></i> 1 <i className="fa-solid fa-plus"></i></span>
            <button onClick={() => dispatch(increment())} className='bg-[#00ADB5] py-2 px-8 text-white'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product