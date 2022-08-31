import Perrito from "../Perrito/Perrito";
import styles from "./Perritos.module.css";

// Recorro la lista de perritos que entra por props, y renderizo todos los perritos. les mando los metodos agregar y quitar a favoritos.
const Perritos = ({ lista, mostrarFavoritos, quitarFavorito }) => {
  return (
    <>
      <h2>Lista random de perritos</h2>
      <div className={styles.lista_perritos}>
        {lista.map((perrito, index) => (
          <Perrito
            key={index + perrito.id}
            id={perrito.id}
            url={perrito.url}
            mostrarFavoritos={mostrarFavoritos}
            quitarFavorito={quitarFavorito}
          />
        ))}
      </div>
    </>
  );
};

export default Perritos;
