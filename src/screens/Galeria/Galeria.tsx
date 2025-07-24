import Footer from "../../components/footer/Footer"
import Navbar from "../../components/nav-bar/Navbar"
import img1 from "../../assets/images/img1.jpeg"
import img2 from "../../assets/images/img2.jpeg"
import img3 from "../../assets/images/img3.jpeg"
import img4 from "../../assets/images/img4.jpeg"
import img5 from "../../assets/images/img5.jpg"
import img6 from "../../assets/images/img6.jpeg"
import img7 from "../../assets/images/img7.jpeg"
import img8 from "../../assets/images/img8.jpeg"
import img9 from "../../assets/images/img9.jpeg"
import img10 from "../../assets/images/img10.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BtnScroll from "../../components/btn-scroll/BtnScroll"
import { useEffect } from "react"
import GaleriaElementos from "../../components/galeria-elementos/GaleriaElementos"



function Galeria(){
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return(
        <>
        <BtnScroll />
        <Navbar/>
        <main className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 mb-12">
                <h2 className="text-3xl font-bold text-center mb-6">Galería de Imágenes</h2>
                <GaleriaElementos imagenes={[
                    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
                ]} />
        </div>
        </main>
        <Footer />
        </>
    )
}
export default Galeria;