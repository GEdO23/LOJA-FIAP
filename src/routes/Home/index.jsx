// rfc para criar uma nova export default function
import Propaganda from '../../components/Propaganda'

export default function Home() {
  return (
    <main>
      <div className="propaganda-popup">
        <Propaganda id={0}/>
        <Propaganda id={1}/>
      </div>
    </main>
  )
}
