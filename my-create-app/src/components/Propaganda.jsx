import { Link } from "react-router-dom"
import { listaAparelhos } from './AparelhosData';
import "./Propaganda.css"

export default function Propaganda(props) {
  // ao chamar <Propaganda/>, o id deverá ser mencionado para identificar qual propaganda mostrar
  const dataAparelho = listaAparelhos[props.id];

  return (
    <section className="propaganda-secao">
      <section className="propaganda-lateral">
        <div>
          <h2 className="propaganda-tit">{`${dataAparelho.nome}`}</h2>
          <Link to={`/aparelhos/visualizar/${dataAparelho.id}`}>Clique aqui para ver mais</Link>
        </div>
        <div>
          <h3 className="preco-original">R$ {`${dataAparelho.precOrig}`}</h3>
          <h2 className="preco-desconto">R$ {`${dataAparelho.precDescont}`}</h2>
        </div>
      </section>
      <section className="propaganda-lateral">
        <img className="img-propaganda" src={dataAparelho.imgSrc} alt={`${dataAparelho.imgAlt}`} />
      </section>

    </section>
  )
}
