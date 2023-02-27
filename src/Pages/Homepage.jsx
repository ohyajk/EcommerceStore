import heroImg from '../assets/hero.png';
import tokopedia from '../assets/Tokopedia.png';
import adidas from '../assets/adidas.png';
import Balenciaga from '../assets/Balenciaga.png';
import Bukalpak from '../assets/Bukalapak.png';
import gucci from '../assets/gucci.png';

const HomePage = () => {
    return (
        <div className="hero m-0 w-[100%] items-center flex flex-col">
          <div className="flex w-[100%]">
            <div className="pl-[120px] pt-14 tracking-[0.5px] w-[40%] flex flex-col justify-start gap-[32px] items-start">
              <p className="font-[700] text-[54px] text-[#101913] leading-[70px]">Best Place to Buy <br /> <span className="text-[#db2777]">Everything</span> </p>
              <p className="text-[14px] font-[100] text-[#535A56]">At Ecom App you can buy all your houshold products and more at a single place .</p>
              <button className="px-[22px] py-[8px] rounded-[8px] bg-[#db2777] text-[white] hover:bg-[white] hover:text-[#db2777]">Shop Now</button>
            </div>
            <div className="w-[60%]">
              <img className="max-w-[100%]" src={heroImg} alt="hero logo" />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-8">
            <p className="text-[32px] text-center">We Collaborate With 250++ Leading Top <br /> E-Commerce and Brands</p>
            <div className="flex gap-12 justify-between items-center">
              <img src={tokopedia} alt="toko-png" />
              <img src={adidas} alt="adidas-png" />
              <img src={Balenciaga} alt="balen-png" />
              <img src={Bukalpak} alt="bukal-ng" />
              <img src={gucci} alt="gucci-png" />
            </div>
          </div>
        </div>
    )
}

export default HomePage;