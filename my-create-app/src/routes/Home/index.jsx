// rfc para criar uma nova export default function
import Propaganda from './Propaganda'

export default function Home() {
  return (
    <main>
      <div className="propaganda-popup">
        <Propaganda />
        <Propaganda />
      </div>
    </main>
  )
}
