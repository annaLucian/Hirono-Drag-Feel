import logo from '@/assets/logo.png';
const Header = () => {
    return (
        <header className="absolute top-1/16 left-20">
            <a href="/" className="">
                <img src={logo} alt="Logo hirono drag y feel" className="h-40 w-auto" />
                <span className="hidden">Arrastra cada emoción, ordena el universo Hirono.</span>
            </a>
        </header>
    );
};

export default Header;
