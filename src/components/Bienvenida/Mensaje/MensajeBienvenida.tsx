function MensajeBienvenida() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center max-w-xl mx-auto bg-gradient-to-br from-[#0c0c0b] via-[#414345] to-[#0c0c0b] text-white p-8 rounded-2xl shadow-2xl border border-[#ffd700]/30">
        <div>
            <i className="fa-solid fa-handshake text-6xl mb-4"></i>
        </div>
        <h1 className="text-3xl font-extrabold mb-4 text-gray-100 drop-shadow-lg">
          Bienvenidos al Ministerio ROHI
        </h1>
        <p className="text-start text-lg font-medium mb-6 text-gray-200">
          Aquí transformamos el arte en adoración, expresando nuestra fe a
          través del movimiento, el teatro y la creatividad, siguiendo el
          llamado a glorificar al Señor con todo nuestro ser.
        </p>
      </div>
    </div>
  );
}
export default MensajeBienvenida;
