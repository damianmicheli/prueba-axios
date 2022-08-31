import {useEffect, useState} from 'react'
import styles from './Perrito.module.css'
import like from'../../img/like.svg'
const Perrito = ({url, id, agregarFavorito, quitarFavorito}) =>{

  const [fav, setFav] = useState(false);

const handleClick=() => {
  setFav(!fav);
}

useEffect(()=>{
  if (fav) {
    agregarFavorito(id);
  }
  // else {
  //   quitarFavorito(id);
  // }
},[fav])

const isFav = () => fav ? "block" : "none";

return (        
  <div className={styles.card_perrito}>
    <img src={like} className={styles.fav} style={{display:isFav()}}  alt="fav"/>
    <img className={styles.foto_perrito}onDoubleClick={handleClick} src={url} width="250px" alt={"perrito id: " + id} />
</div>)
}

export default Perrito;