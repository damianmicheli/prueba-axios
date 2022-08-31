import styles from "./Favorito.module.css";
import {useState, useEffect} from 'react'
import like from '../../img/like.svg'

const Favorito = ({ url, id, idFav, quitarFavorito }) => {
  const [fav, setFav] = useState(true);

  const handleClick = () => {
    setFav(!fav);
  };

  const isFav = () => (fav ? "block" : "none");

  useEffect(()=>{
    if (!fav) {
      quitarFavorito(idFav);
    }

  },[fav])

  return (
    <div className={styles.card_favorito}>
      <img src={like} className={styles.fav} style={{ display: isFav() }} alt="fav"/>
      <img
        className={styles.foto_favorito}
        onDoubleClick={handleClick}
        src={url}
        width="250px"
        alt={"perrito id: " + id}
      />
    </div>
  );
};

export default Favorito;
