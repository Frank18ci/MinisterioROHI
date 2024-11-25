import App from "./App"
import Danzas from "./screens/danzas/Danzas"
import Blog from "./screens/blog/Blog"
import { createBrowserRouter } from "react-router-dom"
import Inicio from "./screens/inicio/Inicio"
const router = createBrowserRouter([
  
  {
    path: '',
    element: <Inicio />
  },
  {
    path: 'danzas',
    element: <Danzas />
  },
  {
    path: 'blog',
    element: <Blog />
  }
])

export default router