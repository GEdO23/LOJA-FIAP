import { Link } from 'react-router-dom'
import '../index.css'

export default function Cabecalho() {
  return (
    <header>

      <h1 id='cabec-tit'>LOJA FIAP</h1>

      <div className='cabec-menu'>
        <Link to='/' className='cabec-link'>HOME</Link>
        <Link to='/aparelhos' className='cabec-link'>APARELHOS</Link>
      </div>

    </header>
  )
}
