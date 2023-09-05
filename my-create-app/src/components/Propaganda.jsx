export default function Propaganda() {

  // eslint-disable-next-line no-unused-vars
  const propags = [
    {
      id: 1,
      titulo: 'Teclado Inovador!',
      subtitulo: 'Digitando com novas cores.',
      desc: 'Novo teclado que brilha com luzes rgb é lançado e disponibilizado para o público gamer',
      redirectLink: '#',
      imgSrc: '#',
      imgAlt: 'Teclado com teclas RGB'
    },
    {
      id: 2,
      titulo: 'Mouse Mouse?',
      subtitulo: 'Esse tem medo de gato',
      desc: 'Mouse em formato de rato é criado, e o público vai a gargalhada com esta nova peça no mercado',
      imgAlt: 'Teclado com teclas RGB',
      imgSrc: '#',
      redirectLink: '#'
    }
  ];

  return (
    <section className="propaganda-secao">
        <section className="propaganda-lateral">
          <h2 className="propaganda-tit">Titulo</h2>
          <h3 className="propaganda-subtit">Subtitulo</h3>
          <a href="#">Mais detalhes</a>
          <p className="propaganda-desc">Descricao</p>
        </section>
        <section className="propaganda-lateral">
          <img src="#" alt="Imagem do Item" />
        </section>
    </section>
  )
}
