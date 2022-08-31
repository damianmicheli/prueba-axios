import styles from "./App.module.css";
import Perritos from "../Perritos/Perritos";
import Favoritos from "../Favoritos/Favoritos";
import { useState, useEffect } from "react";
import APIPERRITOS from "../api/api";

export default function App() {
  // como estado de la app quiero manejar la lista de perritos y la lista de favoritos
  const [perritos, setPerritos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  // lo primero que hago al montar el componente APP es mostrar la lista de perritos
  // y la lista de favoritos. hice metodos para reutilizarlos.

  useEffect(() => {
    mostrarRandom();
    mostrarFavoritos();
  }, []);

  // quitarFavorito es un metodo DELETE que recibe un id de favorito (no es el mismo
  // que de la foto) y quita el perrito correspondiente de la lista de favoritos.
  // si la API responde ok, actualizo la lista de favoritos

  const quitarFavorito = (id) => {
    APIPERRITOS.delete(`favourites/${id}`)
      .then(function (response) {
        console.log("Quitaste el perrito con id de favoritos: " + id)
        mostrarFavoritos();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // hago una llamada a la API para que me traiga la lista de favoritos. APIPERRITOS es la instancia de axios que creé en api.js. en el caso
  // de un GET solo le paso el path que falta a la url para llamar al endpoint (la url base esta en api.js)
  // actualizo favoritos con la lista que me devuelve

  const mostrarFavoritos = () => {
    APIPERRITOS.get(`favourites`).then((res) => {
      const favoritos = res.data;
      setFavoritos(favoritos);
    });
  };

  // hago una llamada a la API para que me traiga una lista de 12 perritos

  const mostrarRandom = () => {
    APIPERRITOS.get(`images/search?limit=12`).then((res) => {
      const perritos = res.data;
      setPerritos(perritos);
    });
  };

  // en el return mando un titulo, un boton para traer mas perritos random y la lista de perritos y de favoritos. A perritos le paso la lista
  // y dos metodos, uno para agregar a favoritos y otro para quitar de favoritos.
  // a la lista de favoritos solo le paso el metodo quitar, porque ya estan en favoritos y no los puedo volver a agregar.
  return (
    <div className={styles.app}>
      <h1>PERRITOS</h1>
      <button onClick={mostrarRandom}>Mostrar mas perritos</button>
      <Perritos lista={perritos} quitarFavorito={quitarFavorito} mostrarFavoritos={mostrarFavoritos} />
      <Favoritos lista={favoritos} quitarFavorito={quitarFavorito} />
    </div>
  );
}
