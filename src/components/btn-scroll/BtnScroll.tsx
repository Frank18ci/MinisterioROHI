import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BtnScroll() {
  const [btnScroll, setBtnScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        setBtnScroll(true);
      } else {
        setBtnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

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

  useEffect(() => {
    scrollToTop(); 
  }, [location]);

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
