import BtnScroll from "../../components/btn-scroll/BtnScroll"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/nav-bar/Navbar"

function Coreografias(){
    return (
        <main className="bg-gray-200 ">
            <BtnScroll />
            <Navbar />
            <h1 className="text-6xl uppercase text-gray-600 font-semibold my-6 mx-2 border-b-gray-400 border-b-2">Coreografías</h1>
            <section className="text-center m-3 mb-20">
                <div className=" font-bold mb-6">
                    <h1 className="text-5xl text-gray-600 border-b-gray-400 border-b-2 inline-block">A Danzar</h1> 
                    <em className="block text-gray-600">Barak</em>
                </div>
                <div className="flex justify-center items-center my-4">
                <iframe
                    className="shadow-lg rounded-lg border-2 border-blue-950 w-full max-w-6xl h-72 sm:h-96 md:h-[500px] lg:h-[600px]"
                    src="https://www.youtube.com/embed/W9tUnz5dvXg?si=peINt4TpZO1kLakh"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                </div>
            </section>
            <section className="text-center m-3 mb-20">
                <div className=" font-bold mb-6">
                    <h1 className="text-5xl text-gray-600 border-b-gray-400 border-b-2 inline-block">A Danzar</h1> 
                    <em className="block text-gray-600">Barak</em>
                </div>
                <div className="flex justify-center items-center my-4">
                <iframe
                    className="shadow-lg rounded-lg border-2 border-blue-950 w-full max-w-6xl h-72 sm:h-96 md:h-[500px] lg:h-[600px]"
                    src="https://www.youtube.com/embed/W9tUnz5dvXg?si=peINt4TpZO1kLakh"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                </div>
            </section>
            <Footer />
        </main>
    )
}
export default Coreografias