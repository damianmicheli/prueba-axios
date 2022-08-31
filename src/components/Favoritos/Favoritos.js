import Favorito from "../Favorito/Favorito";
import styles from "./Favoritos.module.css";

const Favoritos = ({ lista, quitarFavorito  }) => {
  return (
    <>
      <h2>Tus Favoritos</h2>
      <div className={styles.lista_favoritos}>
        {lista.map((favorito, index) => (
          <Favorito
            key={index + favorito.image.id}
            id={favorito.image.id}
            idFav={favorito.id}
            url={favorito.image.url}
            quitarFavorito={quitarFavorito}
          />
        ))}
      </div>
    </>
  );
};

export default Favoritos;
