function Titulo({ type, mensaje }: { type: keyof JSX.IntrinsicElements; mensaje: string }){
    const Element = type
    return(
        <Element className="text-3xl sm:text-center md:text-start uppercase text-gray-900 font-extrabold my-6 mx-4">{mensaje}</Element>
    )
}
export default Titulo;