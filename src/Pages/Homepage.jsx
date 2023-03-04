const HomePage = () => {
  return (
    <div className="hero m-0 w-[100%] items-center flex flex-col md:p-0 px-2">
      <div className="md:flex-row w-[100%] md:gap-0 gap-5 flex flex-col-reverse">
        <div className="md:pl-[120px] pt-14 tracking-[0.5px] md:w-[40%] w-[100%] flex flex-col md:justify-start md:gap-[32px] md:items-start text-center md:text-left gap-9">
          <p className="font-[700] md:text-[54px] text-[40px] text-[#101913] md:leading-[70px]">Best Place to Buy <br /> <span className="text-[#db2777]">Everything</span> </p>
          <p className="text-[14px] font-[100] text-[#535A56]">At Ecom App you can buy all your houshold products and more at a single place .</p>
          <button className="md:px-[22px] w-[125px] py-2 md:py-[8px] rounded-[8px] bg-[#db2777] text-[white] hover:bg-[white] hover:text-[#db2777] md:self-start self-center">Shop Now</button>
        </div>
        <div className="w-[60%]">
          <img className="md:max-w-[100%] md:block min-w-[400px] min-h-[420px] mt-5" src="/hero.png" alt="hero logo" />
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-8">
        <p className="md:text-[32px] text-[25px] text-center">We Collaborate With 250++ Leading Top <br /> E-Commerce and Brands</p>
        <div className="flex md:gap-16 gap-5 justify-between items-center flex-wrap">
          <img className="w-[120px] md:w-[200px]" src="/Tokopedia.png" alt="toko-png" />
          <img className="w-[120px] md:w-[200px]" src="/adidas.png" alt="adidas-png" />
          <img className="w-[120px] md:w-[200px]" src="/Balenciaga.png" alt="balen-png" />
          <img className="w-[120px] md:w-[200px]" src="/Bukalapak.png" alt="bukal-ng" />
          <img className="w-[120px] md:w-[200px]" src="/gucci.png" alt="gucci-png" />
        </div>
      </div>
      <div className="w-[100%] mt-28 md:pl-[120px]">
        <p className="text-[#101913] text-[32px] text-left">Browse Categories of <br /> The Store</p>
        <div className="mt-10 w-[100%] flex gap-[5%] box-border overflow-x-scroll">
            <div>
              <img className="min-w-[270px] h-[289px]" src="/cat1.png" alt="category1" />
              <p className="text-center">Footwear</p>
            </div>
            <div>
              <img className="min-w-[270px] h-[289px]" src="/cat2.png" alt="category1" />
              <p className="text-center">Clothing</p>
            </div>
            <div>
              <img className="min-w-[270px] h-[289px]" src="/cat3.png" alt="category1" />
              <p className="text-center">Watches</p>
            </div>
            <div>
              <img className="min-w-[270px] h-[289px]" src="/cat4.png" alt="category1" />
              <p className="text-center">Electronics</p>
            </div>
            <div>
              <img className="min-w-[270px] h-[289px] rounded-[18px]" src="/cat5.jpg" alt="category5" />
              <p className="text-center">Grocery</p>
            </div>
            <div>
              <img className="min-w-[270px] h-[289px] rounded-[18px]" src="/cat6.jpg" alt="category6" />
              <p className="text-center">Beauty</p>
            </div>
        </div>
      </div>
      <div className="mt-20 w-[100%] flex justify-center flex-col items-center">
          <p className="text-[#101913] text-[32px] text-center">Why Choose Quik<span className="text-[#db2777]">Mart</span>?</p>
          <div className="md:w-[60%] h-[150px] mt-3 mb-5 flex justify-around items-center">
            <div className="w-[30%] flex flex-col justify-center items-center gap-2">
              <img src="/Icon1.png" alt="icon1" />
              <p>Free Delivery</p>
            </div>
            <div className="w-[30%] flex flex-col justify-center items-center gap-2">
              <img src="/Icon2.png" alt="icon2" />
              <p>Trusted Platform</p>
            </div>
            <div className="w-[30%] flex flex-col justify-center items-center gap-2">
              <img src="/Icon3.png" alt="icon3" />
              <p>Here for you</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage;