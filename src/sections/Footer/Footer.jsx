import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-screen">
      <div className="w-full h-10 bg-white flex items-center justify-center">
        <div className="text-black max-w-7xl">
          Lic. Lucía Indo © 2023 - Sitio creado con{" "}
          <span className="text-red-500">♥</span> por{" "}
          <Link to="https://manumaldonado.com" target="_blank" rel="noreferrer">
            Manu Maldonado
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
