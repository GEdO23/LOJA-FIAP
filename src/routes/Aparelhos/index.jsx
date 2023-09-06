import { Link } from "react-router-dom"
import "../../components/Aparelhos.css"
import { listaAparelhos } from "../../components/AparelhosData"

export default function Aparelhos() {
  return (
    <div className="conteudo">
      <h1>Aparelhos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {listaAparelhos.map((aparelho) => (
            <tr key={aparelho.id}>
              <td>
                <Link to={`/aparelhos/visualizar/${aparelho.id}`}>
                  {aparelho.nome}
                </Link>
              </td>
              <td>R$ {aparelho.precDescont},00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}