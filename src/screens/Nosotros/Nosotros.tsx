import BtnScroll from "../../components/btn-scroll/BtnScroll";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav-bar/Navbar";
import Titulo from "../../components/Titulo/Titulo";

function Nosotros() {
  return (
    <main className="bg-gray-100">
      <BtnScroll />
      <Navbar />
      <div className="container mx-auto pt-32 px-6 py-8 ">
        <Titulo type="h1" mensaje="Nosotros" className="text-center text-5xl mb-16" />
        <div className="grid md:grid-cols-3 justify-items-center gap-8">
          <div className="p-8 bg-white rounded-lg border border-gray-50 shadow-lg">
            <div className="text-center ">
                <i className="text-blue-800 fas fa-bullseye text-4xl"></i>
                <Titulo type="h2" mensaje="Misión" className="text-center" />
            </div>
            <div>
                <p className="mt-2 text-gray-900">
              Nuestra misión es glorificar a Dios a través de la danza, transmitiendo su amor y mensaje a la congregación y a quienes nos rodean. Buscamos inspirar, edificar y unir a la comunidad mediante expresiones artísticas que reflejen fe, esperanza y servicio.
            </p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-lg border border-gray-50 shadow-lg">
            <div className="text-center">
                <i className="text-blue-800 fas fa-eye text-4xl"></i>
                <Titulo type="h2" mensaje="Visión" className="text-center" />
            </div>
            <div>
                <p className="mt-2 text-gray-900">
                  Nuestra visión es ser un ministerio de danza que inspire a la congregación y a la comunidad a buscar una relación más profunda con Dios, promoviendo la unidad, el crecimiento espiritual y la excelencia artística, para que cada presentación sea una oportunidad de adoración y transformación.
                </p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-lg border border-gray-50 shadow-lg">
            <div className="text-center">
                <i className="text-blue-800 fas fa-star text-4xl"></i>
                <Titulo type="h2" mensaje="Valores" className="text-center" />
            </div>
            <div>
                <ul className="mt-2 list-disc list-inside space-y-2 text-gray-900">
                    <li>Adoración: Honramos a Dios en cada movimiento y presentación.</li>
                    <li>Unidad: Fomentamos el trabajo en equipo y el apoyo mutuo.</li>
                    <li>Excelencia: Buscamos dar lo mejor en cada ensayo y presentación.</li>
                    <li>Servicio: Servimos a la congregación y comunidad con humildad.</li>
                    <li>Integridad: Actuamos con honestidad y respeto dentro y fuera del ministerio.</li>
                    <li>Pasión: Expresamos nuestro amor por Dios a través de la danza.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default Nosotros;
