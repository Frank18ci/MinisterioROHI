import Blog from "./screens/blog/Blog"
import { createBrowserRouter } from "react-router-dom"
import Inicio from "./screens/inicio/Inicio"
import Imagenes from "./screens/imagenes/Imagenes"
import Coreografias from "./screens/coreografias/Coreografias"
const router = createBrowserRouter([
  
  {
    path: '',
    element: <Inicio />
  },
  {
    path: 'Imagenes',
    element: <Imagenes />
  },
  {
    path: 'blog',
    element: <Blog />
  },
  {
    path: 'Coreografias',
    element: <Coreografias/>
  }
])

export default router