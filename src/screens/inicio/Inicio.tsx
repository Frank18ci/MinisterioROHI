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
import BtnScroll from "../../components/btn-scroll/BtnScroll";
import { Link } from "react-router-dom";
import MensajeBienvenida from "../../components/Bienvenida/Mensaje/MensajeBienvenida";
import VersiculoBienvenida from "../../components/Bienvenida/Versiculo/VersiculoBienvenida";
import Titulo from "../../components/Titulo/Titulo";
import CountUp from 'react-countup';
import GaleriaElementos from "../../components/galeria-elementos/GaleriaElementos";
import Videos from "../../components/sections/Videos";


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
            strings: ["Ministerio, ROHI.", "Bienvenido.", "Explora y disfruta."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <main className="bg-gray-100">
            <BtnScroll />
            <Navbar />
            
            
            <div className="flex justify-center items-center h-screen text-6xl sm:text-8xl text-gray-800">
                <div className="font-bold" ref={el}></div>
            </div>

            <div className="container mx-auto px-4 py-8 mb-12">
                <div className="flex justify-center items-center justify-items-center pb-8 flex-col md:flex-row">
                    <MensajeBienvenida />
                    <VersiculoBienvenida />
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold text-center mb-6">¿Quiénes Somos?</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div data-aos="fade-right">
                        <h1 className="text-justify text-lg text-gray-900">
                            En el Ministerio ROHI de la Iglesia Visión de Fe, vivimos nuestra misión con pasión, creando una comunidad donde cada persona experimenta el amor de Dios, crece en su fe y descubre su propósito en Cristo.
                        </h1>
                        <p className="text-justify text-lg text-gray-900">
                            Fomentamos un ambiente de adoración y aprendizaje, donde los talentos se convierten en servicio. Unidos en respeto y apoyo, buscamos impactar positivamente nuestro entorno y reflejar los valores del Reino de Dios. Cada paso en la fe es una oportunidad para acercarnos más a Él.
                        </p>
                    </div>
                    <div className=" flex justify-center" data-aos="fade-left">
                        <img src={logo} alt="Logo ROHI" className="max-w-full h-auto rounded" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8 mb-12">
                <div className="grid md:grid-cols-3 gap-20 md:gap-6 items-center justify-center justify-items-center">
                    <div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-100 rounded-full p-4 mb-2 shadow-lg ">
                                <i className="fa-solid fa-people-group text-5xl text-blue-600"></i>
                            </div>
                            <h2 className="text-center text-xl font-semibold text-gray-700 mb-1">
                                Miembros del Ministerio
                            </h2>
                            <div className="text-4xl font-extrabold text-blue-600 flex items-baseline">
                                <span className="mr-1">+</span>
                                <CountUp end={10} duration={2.5} />
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                y creciendo cada día
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-200 rounded-full p-4 mb-2 shadow-lg">
                                <i className="fa-solid fa-church text-6xl text-blue-700"></i>
                            </div>
                            <div className="text-center text-xl font-semibold text-gray-700 mb-1">
                                Iglesia Visión de Fe
                            </div>
                            <div className="text-center text-lg font-medium text-blue-700 flex items-center gap-2 mb-1">
                                <i className="fa-solid fa-location-dot text-blue-500"></i>
                                Calle San Agustin 343, Arequipa, Perú
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                Un lugar de encuentro y crecimiento espiritual
                            </div>
                            <a
                                href="https://maps.google.com/?q=Calle+San+Agustin+343,+Arequipa,+Peru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                        
                    </div>
                    <div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-100 rounded-full p-4 mb-2 shadow-lg">
                                <i className="fa-solid fa-hands-praying text-5xl text-blue-800"></i>
                            </div>
                            <div className="text-center text-xl font-semibold text-gray-700 mb-1">
                                Años de Servicio Ministerial
                            </div>
                            <div className="text-4xl font-extrabold text-blue-800 flex items-baseline">
                                <span className="mr-1">+</span>
                                <CountUp end={2} duration={2.5} />
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                Sirviendo con dedicación y amor desde el comienzo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8 mb-12">
                <Titulo type="h3" mensaje="Galería de Imágenes" />
                <GaleriaElementos imagenes={[img1, img2, img3, img4]} />
                
                <div className="text-center mt-6">
                    <Link to="/galeria" className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition">Ver más imágenes</Link>
                </div>
            </div>
            <Videos />
            <Footer />
        </main>

    )
}
export default Inicio