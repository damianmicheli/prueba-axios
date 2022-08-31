import { useEffect, useState } from "react";
import styles from "./Perrito.module.css";
import like from "../../img/like.svg";
import APIPERRITOS from "../api/api";

const Perrito = ({ url, id, mostrarFavoritos, quitarFavorito }) => {
  // como estado me interesa si el perrito esta en favoritos, y si esta en favoritos, el id en la lista de favoritos (que es distinto al id
  // de la lista de perritos)

  const [fav, setFav] = useState(false);
  const [idFav, setIdFav] = useState(0);


  //cuando hago doble click le cambio el estado de favorito. si era true ahora es false, y viceversa

  const handleDoubleClick = () => {
    setFav(!fav);
  };

  // agregarFavorito es un metodo post que agrega la foto del perrito actual
  // a mi lista de favoritos. si la API responde ok, actualizo la lista de
  // favoritos

  const agregarFavorito = (id) => {
    APIPERRITOS.post("favourites", { image_id: id })
      .then(function (response) {
        setIdFav(response.data.id);
        console.log("Agregaste el perrito con id: " + id)
        mostrarFavoritos();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // en este effect me fijo cuando cambia fav. segun en que estado este, si es true,
  // agrego el perrito a favoritos. si es false, lo saco

  useEffect(() => {
    if (fav) {
      agregarFavorito(id);
    } else if (idFav !== 0) {
      quitarFavorito(idFav);
    }
  }, [fav]);

  // una funcion que, segun sea favorito o no, me devuelve "block" o "none" para el valor de display
  const isFav = () => (fav ? "block" : "none");

  return (
    <div className={styles.card_perrito}>
      <img
        src={like}
        className={styles.fav}
        style={{ display: isFav() }}
        alt="Corazón"
      />
      <img
        className={styles.foto_perrito}
        onDoubleClick={handleDoubleClick}
        src={url}
        width="250px"
        alt={"perrito id: " + id}
      />
    </div>
  );
};

export default Perrito;
