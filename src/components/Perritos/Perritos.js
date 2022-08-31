import Perrito from "../Perrito/Perrito";
import styles from "./Perritos.module.css";

const Perritos = ({ lista, agregarFavorito, quitarFavorito }) => {
  return (
    <>
      <h2>Lista random de perros</h2>
      <div className={styles.lista_perritos}>
        {lista.map((perrito, index) => (
          <Perrito
            key={index + perrito.id}
            id={perrito.id}
            url={perrito.url}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        ))}
      </div>
    </>
  );
};

export default Perritos;
