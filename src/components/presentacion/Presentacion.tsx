type Fecha = {
    mes: string,
    dia: string
}
interface PresentacionProps {
    title?: string;
    subtitle?: string;
    fecha: Fecha;
    hora: string;
    lugarURL?: string;
}

const Presentacion: React.FC<PresentacionProps> = ({ title, subtitle, fecha, hora, lugarURL }) => {
    return (
        <div className="flex justify-between items-center m-2 px-4 py-4 border-2 rounded shadow transition border-gray-600 bg-white">
        <div className="flex flex-col">
          <span className="md:text-3xl font-bold text-gray-900">{title || "Titulo"}</span>
          <span className="sm:text-sm text-md text-gray-600">
            {subtitle || "Subtitulo"}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center border-b border-l border-r border-gray-400 rounded text-white font-semibold">
            <span className="bg-slate-800 rounded-t px-2 py-1 w-full text-center text-sm">{fecha?.mes || "Mes"}</span>
            <span className="px-2 py-1 bg-slate-400 w-full text-center text-sm">
            {fecha?.dia || "Día"}
            </span>
          </div>
          <div className="flex flex-col items-center border-b border-l border-r border-gray-400 rounded text-white font-semibold">
            <span className="bg-slate-800 rounded-t px-2 py-1 w-full text-center text-sm">Hora</span>
            <span className="px-2 py-1 bg-slate-400 w-full text-center text-sm">
            {hora || "Hora"}
            </span>
          </div>
          <div>
            <a href={lugarURL} target="_blank">
                <i className="fa-solid fa-map-location-dot text-3xl text-gray-700"></i>
            </a>
          </div>
        </div>
      </div>
    )
}
export default Presentacion