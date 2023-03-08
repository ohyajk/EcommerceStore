const fetchProducts = async() => {
    const products = await fetch('https://fakestoreapi.com/products')
    const data = await products.json()
    return data
}


export default fetchProducts