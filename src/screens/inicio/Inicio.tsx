import React, { useEffect } from "react";
import Navbar from "../../components/nav-bar/Navbar"
import Footer from "../../components/footer/Footer";
import Typed from "typed.js";
import logo from '../../assets/logo.png'
import './Inicio.css'
import img1 from "../../assets/images/img1.jpeg"
import img2 from "../../assets/images/img2.jpeg"
import img3 from "../../assets/images/img3.jpeg"
import img4 from "../../assets/images/img4.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Inicio() {
    const el = React.useRef(null);
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings: ["Ministerio, ROHI", "Bienvenido a nuestro página.", "Explora y disfruta."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <main className="bg-gray-200">
            <Navbar />
            <div className="flex justify-center items-center h-screen text-6xl sm:text-8xl text-gray-800">
            <div className="font-bold" ref={el}></div>
            </div>
            <div className="container mx-auto px-6 py-8">
                <div className="text-4xl font-bold text-center mb-6">¿Quiénes Somos?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div data-aos="fade-right">
                        <p className="text-justify text-lg">
                            En el Ministerio ROHI de la iglesia VSF, estamos profundamente comprometidos con nuestra misión de servir y fomentar el crecimiento en comunidad. Nuestro enfoque se centra en crear un ambiente donde cada miembro pueda desarrollar su fe, fortalecer sus relaciones y aportar positivamente a su entorno.
                        </p>
                    </div>
                    <div className=" flex justify-center"  data-aos="fade-left">
                        <img src={logo} alt="Logo ROHI" className="max-w-full h-auto rounded" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="text-4xl font-bold text-center mb-6">Nosotros</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <img src={img1} alt="img1" data-aos="fade-up-right" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img2} alt="img1" data-aos="fade-up-left" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img3} alt="img1" data-aos="fade-up-right" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img4} alt="img1" data-aos="fade-up-left" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    )
}
export default Inicio