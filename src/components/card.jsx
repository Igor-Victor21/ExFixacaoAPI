import style from './card.module.css'

export const Card = ({name,image,race,gender,ki}) =>{
    return(
        <>
        <div className={style.card}>
            <h4 className={style.title}>{name}</h4>
             <img className={style.imgstyle}src={image} alt={name} />
             <div className={style.textP}>
                <h4 className={style.text}>{race}</h4>
                <h4 className={style.text}>{gender}</h4>
                <h4 className={style.text}>{ki}</h4>
             </div>
        </div>
         
        </>
    )
}