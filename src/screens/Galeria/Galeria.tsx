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
import img11 from "../../assets/images/img11.jpeg"
import img12 from "../../assets/images/img12.jpeg"
import img13 from "../../assets/images/img13.jpeg"
import img14 from "../../assets/images/img14.jpeg"
import img15 from "../../assets/images/img15.jpeg"
import img16 from "../../assets/images/img16.jpeg"
import img17 from "../../assets/images/img17.jpeg"
import img18 from "../../assets/images/img18.jpeg"
import img19 from "../../assets/images/img19.jpeg"
import img20 from "../../assets/images/img20.jpeg"
import img21 from "../../assets/images/img21.jpeg"
import img22 from "../../assets/images/img22.jpeg"
import img23 from "../../assets/images/img23.jpeg"
import img24 from "../../assets/images/img24.jpeg"
import img25 from "../../assets/images/img25.jpeg"
import img26 from "../../assets/images/img26.jpeg"
import img27 from "../../assets/images/img27.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BtnScroll from "../../components/btn-scroll/BtnScroll"
import { useEffect } from "react"
import GaleriaElementos from "../../components/galeria-elementos/GaleriaElementos"
import Titulo from "../../components/Titulo/Titulo"



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
        <div className="container mx-auto pt-32 px-6 py-8">
                <Titulo type="h1" mensaje="Galería de Imágenes" className="text-center text-5xl mb-16" />
                <GaleriaElementos imagenes={[
                    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
                    img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25,
                    img26, img27
                ]} />
        </div>
        </main>
        <Footer />
        </>
    )
}
export default Galeria;