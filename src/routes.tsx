import { createBrowserRouter } from "react-router-dom"


import Nosotros from "./screens/nosotros/Nosotros"
import Eventos from "./screens/eventos/Eventos"
import Galeria from "./screens/galeria/Galeria"
import Testimonios from "./screens/testimonios/Testimonios"
import Inicio from "./screens/inicio/Inicio"
const router = createBrowserRouter([
  
  {
    path: '',
    element: <Inicio />
  },
  {
    path: 'nosotros',
    element: <Nosotros />
  },
  {
    path: 'eventos',
    element: <Eventos />
  },
  {
    path: 'galeria',
    element: <Galeria />
  },
  {
    path: 'testimonios',
    element: <Testimonios/>
  },
  {
    path: '/*',
    element: <Inicio />
  }
])

export default router