type Fecha = {
    mes: string,
    dia: string
}
interface PresentacionProps {
    title?: string;
    subtitle?: string;
    fecha: Fecha;
    hora: string;
    lugar: string;
    lugarURL?: string;
    imageURL: string;
}

const Presentacion: React.FC<PresentacionProps> = ({ title, subtitle, fecha, hora, lugar, lugarURL, imageURL }) => {
    return (
        <div className="relative m-2 rounded-xl shadow transform transition bg-white ">
          <div className="absolute top-2 left-2">
            <div className="bg-blue-800 rounded-lg px-2 py-1 text-center select-none">
              <p className="text-white text-lg">{fecha.mes}</p>
              <p className="text-white text-3xl font-semibold">{fecha.dia}</p>
            </div>
          </div>
            <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              className="w-full h-full object-cover rounded-t-xl"
              src={imageURL}
              alt="imagen de presentacion"
            />
            </div>
        <div className="flex flex-col p-4 pb-2">
          <span className="md:text-3xl font-bold text-gray-900">{title || "Titulo"}</span>
          <span className="sm:text-sm text-md text-gray-600">
            {subtitle || "Subtitulo"}
          </span>
        </div>
        <div className="flex gap-4 px-4 py-2 pb-4">
          <div className="text-gray-500 font-semibold text-lg">
              {hora} | <a href={lugarURL} target="_blank" rel="noopener noreferrer">{lugar}</a>
          </div>
        </div>
      </div>
    )
}
export default Presentacion