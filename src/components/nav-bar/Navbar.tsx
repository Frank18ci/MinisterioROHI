import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className={`${!isMobileMenuOpen ? "hidden" : "block"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-12 w-auto rounded"
                src={logo}
                alt="Ministerio ROHI"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="rounded-m px-3 py-2 text-xl font-medium text-white"
                  aria-current="page"
                >
                  Inicio
                </Link>
                <Link
                  to="/nosotros"
                  className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Nosotros
                </Link>
                <Link
                  to="/eventos"
                  className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Eventos
                </Link>
                <Link
                  to="/galeria"
                  className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Galería
                </Link>
                <Link
                  to="/testimonios"
                  className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Testimonios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="rounded-m px-3 py-2 text-xl font-medium text-white"
            aria-current="page"
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Nosotros
          </Link>
          <Link
            to="/eventos"
            className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Eventos
          </Link>
          <Link
            to="/galeria"
            className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Galería
          </Link>
          <Link
            to="/testimonios"
            className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Testimonios
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
