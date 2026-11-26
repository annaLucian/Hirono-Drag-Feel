import logo from '@/assets/logo.png';
const Header = () => {
    return (
        <header className="flex justify-center pt-10 lg:absolute lg:top-1/16 lg:left-20">
            <a href="/" className="">
                <img src={logo} alt="Logo hirono drag y feel" className="h-30 lg:h-40 w-auto" />
                <span className="hidden ">Arrastra cada emoción, ordena el universo Hirono.</span>
            </a>
        </header>
    );
};

export default Header;
