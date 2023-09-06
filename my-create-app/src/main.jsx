import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import Aparelhos from './routes/Aparelhos/index.jsx'
import VisualizarAparelhos from './routes/Visualizar Aparelhos/index.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/", element: <App/>, errorElement: <Error/>, 
    children: [
      {path: "/", element: <Home/>},
      {path: "/aparelhos", element: <Aparelhos/>},
      {path: "/aparelhos/visualizar/:id", element: <VisualizarAparelhos/>}
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

