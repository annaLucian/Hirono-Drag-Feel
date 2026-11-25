import logo from '@/assets/logo.png';
const Header = () => {
    return (
        <header className="">
            <img src={logo} alt="" />
            <p className="text-amber-50">Soy un header</p>
            <h1 className="text-amber-50 text-8xl">Hirano: Drag&Feel</h1>
        </header>
    );
};

export default Header;
