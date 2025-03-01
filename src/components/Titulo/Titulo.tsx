function Titulo({ type, mensaje }: { type: keyof JSX.IntrinsicElements; mensaje: string }){
    const Element = type
    return(
        <Element className="text-4xl uppercase text-gray-600 font-semibold my-6 mx-4">{mensaje}</Element>
    )
}
export default Titulo;