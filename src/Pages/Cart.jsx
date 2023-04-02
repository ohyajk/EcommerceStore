import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/productSlice/productSlice';

const Cart = () => {
  const dispatch = useDispatch()

  const data = useSelector(state => state.products.selected);

  let total = 0

  data.forEach(e => total+= e.Price);

  return (
    <div className='px-32' >
      <h2 className='text-center text-lg font-medium py-2'>CART</h2>
      <div className='flex flex-col gap-2 justify-center items-center'>

        {
          data.map((p, i) => {
            return (
              <div className='flex gap-8 justify-center items-center bg-white/20 p-2 border-2 shadow-sm border-black/20 ' key={p.Name}>
                <span>{i+1}</span>
                <img className='h-[100px] w-[100px]' src={p.Image} alt={p.Image} />
                <div className='flex flex-col'>
                  <h4 className='text-sm'>{p.Category}</h4>
                  <h2 className='text-lg font-semibold'>{p.Name}</h2>
                  <h2 className='font-medium'>{p.Price}$</h2>
                </div>
                <div className='flex flex-col'>
                  <button  onClick={() => {dispatch(removeProduct(p._id))}} className='text-lg cursor-pointer flex gap-1 items-center'><i className="fa-solid fa-trash"></i><span>Remove</span></button>
                </div>
              </div>
            )
          })
        }
        {
          data == 0 ? <h2>No items in Cart...</h2> : ''
        }
        </div>
        <div className='py-2 flex justify-center'>
        <h4>Total : {total}$</h4>
        </div>
    </div>
  )
}

export default Cart