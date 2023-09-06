export default function Aparelhos() {

  const listaAparelhos = [
    {
      id: 1,
      nome: 'Ola Jeff'
    },
    {
      id: 2,
      nome: 'Ola mauricio'
    },
  ]

  return (
    <main>
      <h2>Aparelhos</h2>
      {listaAparelhos.map(aparelho=> (
        <li>{aparelho.nome}</li>
      ))}
    </main>
  )
}
