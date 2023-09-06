import { Link } from "react-router-dom"
import { listaAparelhos } from './AparelhosData';
import "./Propaganda.css"
import PropTypes from 'prop-types';

export default function Propaganda(props) {
  // ao chamar <Propaganda/>, o id deverá ser mencionado para identificar qual propaganda mostrar
  Propaganda.propTypes = {
    id: PropTypes.number.isRequired,
  };
  
  const currentId = props.id;
  const dataAparelho = listaAparelhos[currentId];
  
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

