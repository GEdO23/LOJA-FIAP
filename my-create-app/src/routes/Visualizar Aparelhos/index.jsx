import { useParams } from 'react-router-dom';
import { listaAparelhos } from '../../components/AparelhosData'

export default function VisualizarAparelho() {
  const { id } = useParams();
  const aparelho = listaAparelhos.find((ap) => ap.id.toString() === id);

  if (!aparelho) {
    return <p>Aparelho não encontrado.</p>;
  }

  return (
    <div className="conteudo">
      <h1>{aparelho.nome}</h1>
      <p>Preço Original: R$ {aparelho.precOrig}</p>
      <p>DESCONTO: R$ {aparelho.precDescont}</p>
      <p>Capacidade: {aparelho.capacidade} GB</p>
      <p>Descrição: {aparelho.resumo}</p>
    </div>
  );
}