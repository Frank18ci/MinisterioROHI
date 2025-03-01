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
        <main className="bg-gray-200">
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
                    <div>
                        <img src={img5} alt="img1" data-aos="fade-up-right" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img6} alt="img1" data-aos="fade-up-left" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img7} alt="img1" data-aos="fade-up-right" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img8} alt="img1" data-aos="fade-up-left" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img9} alt="img1" data-aos="fade-up-right" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img10} alt="img1" data-aos="fade-up-left" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img3} alt="img1" data-aos="fade-up-right" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
                    <div>
                        <img src={img4} alt="img1" data-aos="fade-up-left" className="border-gray-400 max-w-full h-auto rounded"></img>
                    </div>
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
        </main>
        <Footer />
        </>
    )
}
export default Galeria