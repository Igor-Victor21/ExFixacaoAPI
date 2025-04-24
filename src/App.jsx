import style from './App.module.css'
import { Menu } from './components/menu'

import trunks from './assets/images/trunks02.jpg'
import { useState } from 'react'

function App() {

  const [descBtn, setDescBtn] = useState(false)
  const [verVideo, setVerVideo] = useState(false)


  const btnAparecer = () => {
    setDescBtn(true)
  }

  const verVideoYT = () =>{
    setVerVideo(true)
  }
  return (
    <>
    <Menu option01='Página inicial' option02='Personagens'/>
    <main>
       <section id='s1' className={style.s1}>
        <img className={style.img}src={trunks} alt="trunks-ssj" width={200}/>
        <div className={style.slogan}>
          <h1>Trunks uma vez disse:</h1>
          <p>- "Toma sua filha da puta, Só porque é gostosinha, Não fica se achando muito não, tava achando que ia ganhar de mim é?"</p>
        </div>
        <button onClick={btnAparecer}>Ver resposta Android 18</button>
      </section>
      <section id='s2' className={style.s2}>
        
        {/* condicional para aparecer o texto quando clicar no botão */}
        {/* abrindo chaves para um condicional ternaria, SE a variavel boolean descBtn for verdadeira 
        então aparece a div com o título e o texto  */}
          {descBtn && (
            <div className={style.respostaAndroid}>
            <h1>Android 18 responde:</h1>
            <p>- "Maldito como se atreve"</p>
          </div>
          )}

        <button onClick={verVideoYT}>Assistir ao Vídeo</button>
        {verVideo && (
          <div className='verVideo'>
            {/*iFrame permite com que consiga colocar videos dentro de uma página html */}
          <iframe 
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/qKV_cr1JfYE"
            title="Trunks descendo a lenha"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>  
          </iframe>
          <button >Fechar Vídeo</button>
          </div>
        )}
      </section>
    </main>
    </>
  )
}

export default App
