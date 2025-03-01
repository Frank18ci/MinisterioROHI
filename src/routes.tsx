import { createBrowserRouter } from "react-router-dom"


import Nosotros from "./screens/Nosotros/Nosotros.tsx"
import Eventos from "./screens/Eventos/Eventos.tsx"
import Galeria from "./screens/Galeria/Galeria.tsx"
import Testimonios from "./screens/Testimonios/Testimonios.tsx"
import Inicio from "./screens/Inicio/Inicio.tsx"
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