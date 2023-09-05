import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
        <nav className="menu">
            <h1>ERRO - 404</h1>
            <Link to='/'>Voltar para Página Principal</Link>
        </nav>
    </>
  )
}
