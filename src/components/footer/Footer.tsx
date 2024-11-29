export default function Footer() {
    return (
        <footer className="text-gray-100 bg-gray-800 mx-auto text-center px-4 py-8">
            <h5 className="pb-5 font-extrabold italic text-4xl ">Ministerio Rohi</h5>
            <hr className="border-black border-1" />
            <div className="pb-5">
                <ul className="py-5 flex justify-center gap-5">
                    <li>
                        <a
                            className="border p-2 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="border p-2 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="border p-2 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="border p-2 border-gray-900 rounded-full flex items-center justify-center w-10 h-10"
                            href="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>Terminos y Condiciones - Politica Privada</div>
            <div>Copyright © 2024</div>
        </footer>
    )
}