

import { ReactNode } from "react";

interface TituloProps {
    children: ReactNode;
}

const Titulo = ({ children }: TituloProps) => {
    return (
        <h1 className="text-4xl font-bold text-[#EED88E] text-center mb-6 ">
            {children}
        </h1>
    );
}
export default Titulo;