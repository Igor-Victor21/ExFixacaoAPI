import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { apiDragonBall } from './api/api'
import { Card } from './components/card'

export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")

    const [erro, setErro] = useState(false)

    useEffect(() => {
        apiDragonBall.get(`/characters/?page=${page}`).then((response) =>{
            setData(response.data.items)
        }).catch((error) => {
            if(error.response.status === 404){
            setErro(true)
            }
            console.error(error)
        })
    }, [page])

    console.log(data)

    return(
        <section className={style.wrapPage}>
            <h5><a className={style.backBtn}href="/">Voltar</a></h5>
            <h1 className={style.tittleName}>DragonBall API</h1>
            {erro && <p>Página não encontrada</p>}
            <input className={style.input} type="text" placeholder='Digite uma página (1/6)' value={page} onChange={(e) => setPage(e.target.value)}/>

                <div className={style.wrapCards}>
            {data.map((item, index) => {
                return(
                    <div key={index}>
                       <Card name={item.name} image={item.image} race={item.race} gender={item.gender} ki={item.ki}/>
                    </div>
                )
            })}
                </div>
        </section>
    )
}