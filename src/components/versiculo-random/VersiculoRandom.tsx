import { useState, useEffect } from "react";

function VersiculoRandom() {
    const [versiculo, setVersiculo] = useState({
        id: 0,
        number: 0,
        study: "null",
        verse: "Cargando...",
    });
    const [libros, setLibros] = useState([
        {names: ""}
    ])
    useEffect(() => {
        async function obtenerLibros() {
            try {
                const resp = await fetch("https://bible-api.deno.dev/api/books");
                const data = await resp.json();
                setLibros(data);
                const cantidadLibros = libros.length
                const resp2 = await fetch (`http://www.randomnumberapi.com/api/v1.0/random?min=0&max=${cantidadLibros -1}&count=1`)
                console.log(resp2)
                console.log()
            } catch (error) {
                console.error("Error al obtener libros:", error);
                
            }
        }
        obtenerLibros()
        async function obtenerFetch() {
            try {
                const resp = await fetch("https://bible-api.deno.dev/api/read/rv1960/genesis/1/1");
                const versiculo = await resp.json();
                setVersiculo(versiculo);
            } catch (error) {
                console.error("Error al obtener el versículo:", error);
                setVersiculo({ ...versiculo, verse: "No se pudo cargar el versículo." });
            }
        }


        obtenerFetch();
    }, []); 

    return (
        <div className="text-center max-w-lg mx-auto bg-gray-100  rounded-xl shadow-xl">
            <h1 className="text-2xl text-left  p-2 bg-blue-500  shadow text-white  font-bold mb-4">
                Versículo del día
            </h1>
            <p className="text-3xl mb-6 p-5">
                "{versiculo.verse}"
                <span className="block text-xl text-right font-light mt-2">
                    Genesis 1:{versiculo.number}
                    
                </span>
            </p>
        </div>
    );
}

export default VersiculoRandom;
