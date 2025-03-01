import BtnScroll from "../../components/btn-scroll/BtnScroll";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav-bar/Navbar";
import Presentacion from "../../components/presentacion/Presentacion";

function Blog() {
  return (
    <main className="bg-gray-200">
      <BtnScroll />
      <Navbar />
      <div className="text-4xl font-bold text-center my-4">Presentaciones</div>
      <div className="my-7 mx-4 space-y-6">
        <Presentacion
          title="Libre Soy"
          subtitle="presentación de coreografía"
          fecha={{ mes: "MAR", dia: "02" }}
          hora="6:00 PM"
          lugarURL="https://maps.app.goo.gl/wELUNuhSepefKZWs9"
        />
        <Presentacion
          title="Mix Bueno Es Dios | Mix Rey Vencedor"
          subtitle="presentación de coreografía"
          fecha={{ mes: "MAR", dia: "09" }}
          hora="6:00 PM"
          lugarURL="https://maps.app.goo.gl/wELUNuhSepefKZWs9"
        />
        <Presentacion
          title="Lo Mio No Pasa"
          subtitle="presentación de coreografía"
          fecha={{ mes: "MAR", dia: "16" }}
          hora="6:00 PM"
          lugarURL="https://maps.app.goo.gl/wELUNuhSepefKZWs9"
        />
      </div>

      <Footer />
    </main>
  );
}
export default Blog;
