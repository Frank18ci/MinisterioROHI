import { useState, useEffect } from 'react';

function BtnScroll() {
  const [btnScroll, setBtnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        setBtnScroll(true); // Mostrar el botón
      } else {
        setBtnScroll(false); // Ocultar el botón
      }
    };

    // Añadir evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    btnScroll && (
      <button
        onClick={scrollToTop}
        className="z-10 fixed bottom-12 right-3 px-5 py-3 rounded-full bg-gray-950 bg-opacity-50 text-white shadow-lg hover:bg-gray-700 transition"
        aria-label="Ir a la parte superior"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    )
  );
};

export default BtnScroll;
