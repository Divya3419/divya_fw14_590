
import styles from './Card.module.css'
const Card=(props)=>{
    console.log(props)
    return(
<div className={styles.card}>
    <div className={styles.left}>
        <img src={props.imgUrl} alt="" />
    </div>
    <div className={styles.right}>
        <p style={{color:"red"}}>{props.name}</p>
        <p>{props.gender}</p>
    </div>
</div>
    )
}
export default Card