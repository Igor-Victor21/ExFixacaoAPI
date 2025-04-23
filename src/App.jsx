import style from './App.module.css'
import { Menu } from './components/menu'

import trunks from './assets/images/trunks02.jpg'

function App() {

  return (
    <>
    <Menu option01='Página inicial' option02='Personagens'/>
    <main>
       <section id='s1' className={style.s1}>
        <img className={style.img}src={trunks} alt="trunks-ssj" width={200}/>
        <div className={style.slogan}>
          <h1>Trunks uma vez disse:</h1>
          <p>- "Toma sua filha da puta, Só porque é gostosinha, Não fica se achando muito não"</p>
        </div>
        <button>Saíba mais</button>
      </section>
    </main>
    </>
  )
}

export default App
