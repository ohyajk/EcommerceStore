import React,{ useState, useEffect } from "react";
import fetchProducts from "../Api/FetchPrdoucts";

const HomePage = () => {

const [products, setProducts] = useState()

const fetcher = async() => {
  const fetch = await fetchProducts()
  setProducts(fetch)
}

useEffect(() => {
  fetcher()
},[])

console.log(products)

  return (
    <div className="text-blackecom">
     <div>
      123
     </div>
    </div>
  )
}

export default HomePage;