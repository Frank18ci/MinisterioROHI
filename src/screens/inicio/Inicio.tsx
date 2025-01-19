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
import VersiculoRandom from "../../components/versiculo-random/VersiculoRandom";


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
        <main className="bg-gray-200">
            <BtnScroll />
            <Navbar />
            <div className="flex justify-center items-center h-screen text-6xl sm:text-8xl text-gray-800">
                <div className="font-bold" ref={el}></div>
            </div>
            <div className="container mx-auto px-6 py-12">
                <div className="text-center max-w-2xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">
                        Bienvenidos al Ministerio ROHI
                    </h1>
                    <p className="text-lg font-medium mb-6">
                        Aquí transformamos el arte en adoración, expresando nuestra fe a través del movimiento, el teatro y la creatividad, siguiendo el llamado a glorificar al Señor con todo nuestro ser.
                    </p>
                    <blockquote className="text-xl italic font-semibold">
                        "Alaben su nombre con danza; cántenle alabanza con pandero y lira."
                        <span className="block text-lg font-light mt-2">Salmos 149:3</span>
                    </blockquote>

                </div>
            </div>
            <div className="container mx-auto px-6 py-12">
                <VersiculoRandom />
            </div>
            <div className="container mx-auto px-6 py-8">
                <div className="text-4xl font-bold text-center mb-6">¿Quiénes Somos?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div data-aos="fade-right">
                        <p className="text-justify text-lg text-gray-900">
                            En el Ministerio ROHI de la Iglesia Visión de Fe, vivimos nuestra misión con pasión, creando una comunidad donde cada persona experimenta el amor de Dios, crece en su fe y descubre su propósito en Cristo.
                        </p>
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
                <h2 className="text-3xl font-bold text-center mb-6">Galería de Imágenes</h2>
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
                <div className="text-center mt-6">
                    <Link to="/danzas" className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition">Ver más imágenes</Link>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8 mb-12">
                <h2 className="text-3xl font-bold text-center mb-6">Galería de Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/Zwqn4ZL0w3w"
                            title="Video 1"
                            className="w-full h-96 rounded-lg shadow-md"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/NTAkrU0veNo"
                            title="Video 2"
                            className="w-full h-96 rounded-lg shadow-md"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <a href="https://www.youtube.com/@ALEXZURDOMUSIC" target="_blank" className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition">Ver más videos</a>
                </div>
            </div>
            <Footer />
        </main>

    )
}
export default Inicio