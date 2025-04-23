import style from './App.module.css'
import { Menu } from './components/menu'

function App() {

  return (
    <>
    <Menu option01='Página inicial' option02='Personagens'/>
    <main>
      <section id='s1' className={style.s1}>
        <h1>pag 01</h1>
      </section>
    </main>
    </>
  )
}

export default App
