import style from './card.module.css'

export const Card = ({name,image,race,gender,ki}) =>{
    return(
        <>
         <h5 className={style.tittle}>{name}</h5>
         <img className={style.imgstyle}src={image} alt={name} />
         <h5 className={style.raca}>{race}</h5>
         <h5 className={style.ki}>{gender}</h5>
         <h5 className={style.ki}>{ki}</h5>
        </>
    )
}