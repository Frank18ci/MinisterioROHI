import { useState } from "react";
import Titulo from "../Titulo/Titulo";

export default function Videos() {
    const [btnPresentacionesActive, setBtnPresentacionesActive] = useState(true);

    return (
        <div className="container mx-auto px-4 py-8 mb-12">
            <Titulo type="h4" mensaje="Nuestros Videos" />
            <div className="flex justify-center items-center mb-8">
                <div className={`cursor-pointer mx-2 px-4 py-2 rounded ${btnPresentacionesActive ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-indigo-500 transition`} onClick={() => setBtnPresentacionesActive(true)}>Presentaciones</div>
                <div className={`cursor-pointer mx-2 px-4 py-2 rounded ${!btnPresentacionesActive ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-indigo-500 transition`} onClick={() => setBtnPresentacionesActive(false)}>Ensayos</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {btnPresentacionesActive ? (
                    <>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/Kd0a5_Nkkkc"
                                title="Fiesta en el Desierto | Montesanto | Coreografía"
                                className="w-full h-96 rounded-lg shadow-md"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/wwd7_FPCy5w"
                                title="Bueno es Dios | Ccint Music | Coreografía"
                                className="w-full h-96 rounded-lg shadow-md"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/3Vg1rD37gUc"
                                title="Ensayo La Voz de mi Amado ✨🎶🎤💃"
                                className="w-full h-96 rounded-lg shadow-md"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/Q-uhAibyb74"
                                title="Ensayo Danza de Amor | Cantos de Liberación | La Mesa - Ccint Music"
                                className="w-full h-96 rounded-lg shadow-md"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </>
                )}
            </div>
            <div className="text-center mt-6">
                <a href="https://www.youtube.com/@MINISTERIOROHI" target="_blank" className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition">Ver más videos</a>
            </div>
        </div>
    )
}
