function Titulo({ type, mensaje, className }: { type: keyof JSX.IntrinsicElements; mensaje: string; className?: string }) {
    const Element = type;
    const finalClassName = `text-3xl  uppercase text-gray-900 font-extrabold my-6 mx-4${className ? ' ' + className : ' sm:text-center md:text-start'}`;
    return (
        <Element className={finalClassName}>
            {mensaje}
        </Element>
    );
}
export default Titulo;