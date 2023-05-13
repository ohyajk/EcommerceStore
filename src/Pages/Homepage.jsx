import { addProduct } from "../store/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const selected = useSelector((state) => state.products.selected);

  return (
    <>
      <Slider />
      <div className=" bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center lg:h-[110px] px-10 lg:py-0 py-10 text-xs md:text-lg">
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H5.63636V24.1818H35"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M34.9982 1H11.8164V18H34.9982V1Z"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M11.8164 7.18164H34.9982"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Free Shipping
              </p>
              <p className="text-sm text-qgray">When ordering over $100</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span>
                <svg
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M30.7 2L29.5 10.85L20.5 9.65"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Free Return
              </p>
              <p className="text-sm text-qgray">Get Return within 30 days</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span>
                <svg
                  width="32"
                  height="38"
                  viewBox="0 0 32 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Secure Payment
              </p>
              <p className="text-sm text-qgray">100% Secure Online Payment</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span>
                <svg
                  width="32"
                  height="35"
                  viewBox="0 0 32 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M16 28V22"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                    stroke="#00ADB5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Best Quality
              </p>
              <p className="text-sm text-qgray">Original Product Guarenteed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-blackecom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2 mx-2">
        {products?.map((p) => {
          return (
            <section key={p.title}>
              <div className="bg-white p-2 m-4 flex flex-col justify-center items-center gap-2 drop-shadow-lg shadow-md">
                <img
                  className="h-[200px] w-[200px]"
                  src={p.image}
                  alt={p.title}
                />
                <div>
                  {Array.from({ length: Math.round(p.rating.rate) }, (_, i) => (
                    <i
                      key={i}
                      className="fa-solid fa-star"
                      aria-hidden="true"
                    ></i>
                  ))}
                </div>
                <Link to={`/product/${p.id}`}>
                  <h1 className="text-lg font-medium">
                    {p.title.split(" ").slice(0, 2).join(" ")}
                  </h1>
                </Link>
                <div className="flex justify-center items-center gap-1">
                  <h4 className="text-lg font-medium">{p.price}$</h4>
                  <span className="text-red-500 line-through">
                    {p.price * 2}$
                  </span>
                </div>
                {selected.includes(p) ? (
                  <button className="border-2 px-4 py-2 text-white/50 font-medium bg-[#222831]">
                    ADDED
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addProduct(p))}
                    className="border-2 px-4 py-2 text-white font-medium bg-[#222831] hover:bg-[#00adb5]"
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
