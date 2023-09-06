import { Link, useParams } from "react-router-dom"
import { propags } from "./PropagandasData"
import "./Propaganda.css"

export default function Propaganda(props) {
  // ao chamar <Propaganda/>, o id deverá ser mencionado para identificar qual propaganda mostrar
  const propagAtual = propags[props.id];

  return (
    <section className="propaganda-secao">
      <section className="propaganda-lateral">
        <h2 className="propaganda-tit">{`${propagAtual.tit}`}</h2>
        <Link to={`/produtos/editar/${props.id}`}>Clique aqui para ver mais</Link>
      </section>
      <section className="propaganda-lateral">
        <img className="img-propaganda" src={propagAtual.imgSrc} alt={`${propagAtual.imgAlt}`} />
        <h3 className="preco-original">R${`${propagAtual.precOrig}`}</h3>
        <h2 className="preco-desconto">R${`${propagAtual.precDescont}`}</h2>
      </section>

    </section>
  )
}
