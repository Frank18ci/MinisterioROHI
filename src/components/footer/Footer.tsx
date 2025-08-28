export default function Footer() {
    return (
        <footer className="text-gray-100 bg-[#0c0c0b] mx-auto text-center px-4 py-8">
            <h5 className="pb-5 font-extrabold italic text-4xl ">Ministerio Rohi</h5>
            <p className="pb-5 font-light italic">Un ministerio dedicado a la danza y la adoración</p>
            <hr className="border-black border-1" />
            <div className="pb-3">
                <ul className="py-2 flex justify-center gap-5">
                    <li>
                        <a
                            className="border p-2 hover:scale-125 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="https://www.facebook.com/profile.php?id=61570055005408"
                            target="_blank">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="border p-2 hover:scale-125 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="https://www.instagram.com/ministeriorohi95/"
                            target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a
                            className="border p-2 hover:scale-125 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li> */}
                    <li>
                        <a
                            className="border p-2 hover:scale-125 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="https://www.youtube.com/@MINISTERIOROHI"
                            target="_blank">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>Terminos y Condiciones - Politica Privada</div>
            <div>Copyright © 2025</div>
        </footer>
    )
}