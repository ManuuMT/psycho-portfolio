import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 w-screen h-16 bg-slate-50 flex items-center justify-center shadow-md">
      <div className="flex justify-between items-center h-full w-full max-w-7xl px-4">
        <div className="w-64" style={{ minWidth: 48 }}>
          <img className="w-full h-full object-contain" src={logo} alt="logo" />
        </div>
        <ul className="w-fit h-full flex items-center text-sky-950 font-semibold gap-10">
          <li className="cursor-pointer">Inicio</li>
          <li className="cursor-pointer">Acerca de mi</li>
          <li className="cursor-pointer">Servicios</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
