const Footer = () => {
    return (
        <div className="flex md:px-20 w-[100%] bg-[#db2777] p-4 mt-2 md:gap-4">
            <div className="w-[48%] flex flex-col gap-5">
                <h3 className="text-2xl font-[cursive] text-white">Quick <span>Mart</span></h3>
                <p>Bachira is an online store dealing with all product
                    Bachira provide cheap, high quality, products to
                    customers</p>
            </div>
            <div className="w-[48%] flex gap-5">
                <div className="hidden md:flex flex-col gap-1">
                    <h3 className="text-[18px] font-[500]">Explore Us</h3>
                    <ul className="pr-2 text-[#535A56]">
                        <li className="font-extralight">Our Career</li>
                        <li>Privacy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="md:flex flex-col gap-1">
                    <h3 className="text-[18px] font-[500] md:mt-0 mt-2">Connect Us</h3>
                    <ul className="text-[#535A56]">
                        <li>support@Quick-Mart.com</li>
                        <li>011-000-555</li>
                        <li>Vasant Bihar, Kanpur</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;