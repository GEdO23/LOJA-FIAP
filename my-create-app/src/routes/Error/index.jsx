import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
        <nav id="err-menu">
            <h1 id="err-tit">ERRO - 404</h1>
            <Link to='/' id="err-link">Voltar para Página Principal</Link>
        </nav>
    </>
  )
}
