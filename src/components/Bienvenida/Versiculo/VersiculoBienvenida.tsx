function VersiculoBienvenida(){
    return (
      <section className="container mx-auto px-6 py-12">
        <div className="text-center max-w-xl mx-auto bg-gradient-to-br from-[#0c0c0b] via-[#414345] to-[#0c0c0b] text-white p-8 rounded-2xl shadow-2xl border border-[#ffd700]/30">
          <div className="mb-4">
            <i className="fa-solid fa-book-bible text-6xl"></i>
          </div>
          <h1 className="text-3xl font-extrabold mb-4 text-gray-100 drop-shadow-lg">
            Versículo
          </h1>
          <blockquote className="italic font-semibold text-xl mb-2 text-gray-200">
            "Alaben su nombre con danza; cántenle alabanza con pandero y lira."
          </blockquote>
          <footer className="text-lg font-bold text-right block mt-2">
            Salmos 149:3
          </footer>
        </div>
      </section>
    )
}
export default VersiculoBienvenida