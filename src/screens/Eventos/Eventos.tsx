import BtnScroll from "../../components/btn-scroll/BtnScroll";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav-bar/Navbar";
import Presentacion from "../../components/presentacion/Presentacion";
import Titulo from "../../components/Titulo/Titulo";

function Eventos() {
  return (
    <main className="bg-gray-100 ">
      <BtnScroll />
      <Navbar />
      <div className="container mx-auto pt-32 px-6 py-8">
        <Titulo type="h1" mensaje="Eventos" className="text-center text-5xl mb-16" />
        <div className="my-7 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Presentacion
            title="Libre Soy"
            subtitle="presentación de coreografía"
            fecha={{ mes: "Marzo", dia: "02" }}
            hora="6:00 PM"
            lugar="Iglesia"
            lugarURL="https://maps.app.goo.gl/wELUNuhSepefKZWs9"
            imageURL="presentacion-image.webp"
          />
          <Presentacion
            title="Mix Bueno Es Dios | Mix Rey Vencedor"
            subtitle="presentación de coreografía"
            fecha={{ mes: "MAR", dia: "09" }}
            hora="6:00 PM"
            lugar="Iglesia"
            lugarURL="https://maps.app.goo.gl/wELUNuhSepefKZWs9"
            imageURL="presentacion-image2.webp"
          />
          <Presentacion
            title="Lo Mio No Pasa"
            subtitle="presentación de coreografía"
            fecha={{ mes: "MAR", dia: "16" }}
            hora="6:00 PM"
            lugar="Iglesia"
            lugarURL="https://maps.app.goo.gl/wELUNuhSepefKZWs9"
            imageURL="presentacion-image3.webp"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
export default Eventos;
