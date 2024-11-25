import React, { useEffect } from "react";
import Navbar from "../../components/nav-bar/Navbar"
import Typed from "typed.js";
import logo from '../../assets/logo.png'
function Inicio() {
    const el = React.useRef(null);

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
        <main className="bg-gray-400">
            <Navbar />
            <div className="flex justify-center items-center h-screen text-8xl text-gray-800">
                <div ref={el}></div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="text-4xl font-bold text-center mb-6">¿Quiénes Somos?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <p className="text-justify text-lg">
                            En el Ministerio ROHI de la iglesia VSF, estamos profundamente comprometidos con nuestra misión de servir y fomentar el crecimiento en comunidad. Nuestro enfoque se centra en crear un ambiente donde cada miembro pueda desarrollar su fe, fortalecer sus relaciones y aportar positivamente a su entorno.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={logo} alt="Logo ROHI" className="max-w-full h-auto rounded" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="text-4xl font-bold text-center mb-6">Nosotros</div>
                <div>

                </div>
            </div>
        </main>

    )
}
export default Inicio