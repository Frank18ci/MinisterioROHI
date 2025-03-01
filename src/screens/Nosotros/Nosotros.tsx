import BtnScroll from "../../components/btn-scroll/BtnScroll";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav-bar/Navbar";

function Nosotros(){
    return(
        <main className="bg-gray-200">
            <BtnScroll />
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                En desarollo ...
            </div>
            <Footer />
        </main>
    )
}
export default Nosotros