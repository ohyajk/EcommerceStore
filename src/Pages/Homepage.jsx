import { addProduct } from "../store/productSlice/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products);
  const selected = useSelector(state => state.products.selected);
  
  return (
    <div className="text-blackecom grid grid-cols-4 my-2 mx-2">
      {
        products?.map(p => {
          return(
            <section key={p.Name}>
        <div className="bg-white p-2 m-4 flex flex-col justify-center items-center gap-2 drop-shadow-lg shadow-md">
          <img className='h-[200px] w-[200px]' src={p.Image} alt={p.Name} />
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <Link to={`/product/${p._id}`} ><h1 className="text-2xl font-medium">{p.Name}</h1></Link>
          <div className="flex justify-center items-center gap-1">
            <h4 className="text-lg font-medium">{p.Price}$</h4>
            <span className="text-red-500 line-through">599$</span>
          </div>
          {selected.includes(p) ? <button className="border-2 px-4 py-2 text-white/50 font-medium bg-[#222831]" >ADDED</button> : <button onClick={() => dispatch(addProduct(p))} className="border-2 px-4 py-2 text-white font-medium bg-[#222831] hover:bg-[#00adb5]" >ADD TO CART</button> }
          
        </div>
      </section>
          )
        })
      }
      
    </div>
  )
}

export default HomePage;