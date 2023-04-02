import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { addProduct } from '../store/productSlice/productSlice';

const Product = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(state => state.products.products);
  const selected = useSelector(state => state.products.selected);

  console.log(data)


  return (
    data.filter(d => d._id.includes(id)).map((data) => {
      return(
        <section className='flex justify-center items-center'>
      <div className='flex justify-center gap-8 px-32 py-16'>
        <div className='p-8 border-2 border-black/20'>
          <img className='h-[300px]' src={data.Image} alt={data.Name} />
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xl font-semibold w-fit'>{data.Category}</h4>
          <h1 className='text-4xl font-bold w-fit'>{data.Name}</h1>
          <div className='flex justify-start gap-2'>
            <span className='w-fit'>
              {data.Rating >= 1 ?  <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
              {data.Rating >= 2 ?  <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
              {data.Rating >= 3 ?  <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
              {data.Rating >= 4 ?  <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
              {data.Rating >= 5 ?  <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
            </span>
            <h6>{data.Rating} Stars</h6>
          </div>
          <span className='text-xl font-semibold py-2 w-fit'>${data.Price}</span>
          <p className="max-w-[400px]" >{data.Description}</p>
          <div className='flex items-center justify-start gap-4 py-4'>
            <span className='flex items-center gap-2 py-2  px-4 border-2 border-black/20'><i className="fa-solid fa-minus"></i> 1 <i className="fa-solid fa-plus"></i></span>
          {selected.includes(data) ? <button className="border-2 px-4 py-2 text-white/50 font-medium bg-[#222831]" >ADDED</button> : <button onClick={() => dispatch(addProduct(data))} className='bg-[#00ADB5] py-2 px-8 text-white'>Add to Cart</button> }

            
          </div>
        </div>
      </div>
    </section>
      )
    })
  )
}

export default Product