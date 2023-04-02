const Footer = () => {
    return (
        <div className="nav py-2 w-full" >
            <div className="flex items-center justify-center flex-col" >
            <img className="h-32 mt-4" src="/logo.jpg" alt="logo" />
               <hr className="w-[85%] my-8" />
            </div>
            <div className="px-4 md:px-32 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
                <div className="flex flex-col items-center md:items-start justify-start gap-1" >
                    <h2 className="text-lg font-bold">Connect with us</h2>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Youtube</a>
                </div>
                <div className="flex flex-col  items-center md:items-start justify-start gap-1">
                <h2 className="text-lg font-bold">Profile</h2>
                    <a href="#">Career</a>
                    <a href="#">About</a>
                    <a href="#">Policies</a>
                    <a href="#">Funds</a>
                </div>
                <div className="flex flex-col  items-center md:items-start justify-start gap-1">
                <h2 className="text-lg font-bold">Helpful</h2>
                    <a href="#">Flash Sale</a>
                    <a href="#">FAQ</a>
                    <a href="#">Support</a>
                </div>
                <div className="flex flex-col  items-center md:items-start justify-start gap-1">
                <h2 className="text-lg font-bold">About Us</h2>
                <p className="w-[70%] md:w-full" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            </div>
            <div className="w-full flex justify-center items-center my-4" >
                <span>Made with ❤️ by <a className="text-amber-400" href="https://github.com/ohyajk" target="_blank">Jitender Kumar</a> & <a className="text-amber-400" href="https://github.com/gauravgangwarweb" target="_blank">Gaurav Gangwar</a></span>
            </div>
        </div>
    )
}

export default Footer;