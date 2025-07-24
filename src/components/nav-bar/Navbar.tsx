import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MouseEventHandler, useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0c0c0b] fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1 ">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón Hamburguesa */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-[#20201e] hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Abrir menú</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18m-18 6h18"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-between justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img className="h-12 w-auto rounded" src={logo} alt="Ministerio ROHI" />
            </div>

            {/* Menú Desktop */}
            <div className="hidden sm:flex items-center">
              <div className="flex space-x-4">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/nosotros">Nosotros</NavLink>
              <NavLink to="/eventos">Eventos</NavLink>
              <NavLink to="/galeria">Galería</NavLink>
              <NavLink to="/testimonios">Testimonios</NavLink>
              </div>
            </div>
            </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col space-y-2 py-3 bg-[#0c0c0b] items-start pl-4">
          <NavLink to="/" onClick={toggleMobileMenu}>Inicio</NavLink>
          <NavLink to="/nosotros" onClick={toggleMobileMenu}>Nosotros</NavLink>
          <NavLink to="/eventos" onClick={toggleMobileMenu}>Eventos</NavLink>
          <NavLink to="/galeria" onClick={toggleMobileMenu}>Galería</NavLink>
          <NavLink to="/testimonios" onClick={toggleMobileMenu}>Testimonios</NavLink>
        </div>
      )}
    </nav>
  );
}

interface INavLink{
  to?: string,
  children: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>

}
const NavLink:React.FC<INavLink> = ({ to, children, onClick }) => {
  return (
    <Link
      to={to || "#"}
      onClick={onClick}
      className="block px-4 py-2 text-lg font-medium text-gray-300 hover:bg-[#20201e] hover:text-white rounded-md"
    >
      {children}
    </Link>
  );
}

export default Navbar;
