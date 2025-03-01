import { createBrowserRouter } from "react-router-dom"

import Inicio from "./screens/inicio/Inicio"
import Nosotros from "./screens/Nosotros/Nosotros"
import Eventos from "./screens/Eventos/Eventos"
import Galeria from "./screens/Galeria/Galeria"
import Testimonios from "./screens/Testimonios/Testimonios"
const router = createBrowserRouter([
  
  {
    path: '',
    element: <Inicio />
  },
  {
    path: '/nosotros',
    element: <Nosotros />
  },
  {
    path: '/eventos',
    element: <Eventos />
  },
  {
    path: '/galeria',
    element: <Galeria />
  },
  {
    path: '/testimonios',
    element: <Testimonios/>
  },
  {
    path: '/*',
    element: <Inicio />
  }
])

export default router