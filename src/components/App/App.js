import styles from "./App.module.css";
import Perritos from "../Perritos/Perritos";
import Favoritos from "../Favoritos/Favoritos";
import { useState, useEffect } from "react";
import APIPERRITOS from "../api/api";

export default function App() {
  const [perritos, setPerritos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    mostrarRandom();
    mostrarFavoritos();
  }, []);

  const agregarFavorito = (id) => {
    APIPERRITOS.post("favourites", { image_id: id })
      .then(function (response) {
        console.log(response);
        mostrarFavoritos()
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const quitarFavorito = (id) => {
    APIPERRITOS.delete(`favourites/${id}`)
      .then(function (response) {
        console.log(response);
        mostrarFavoritos();
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const mostrarFavoritos = () => {
    APIPERRITOS.get(`favourites`).then((res) => {
      const favoritos = res.data;
      setFavoritos(favoritos);
    });
  };

  const mostrarRandom = () => {
    APIPERRITOS.get(`images/search?limit=12`).then((res) => {
      const perritos = res.data;
      setPerritos(perritos);
    });
  };

  return (
    <div className={styles.app}>
      <h1>PERRITOS</h1>
      <button onClick={mostrarRandom}>Mostrar mas perritos</button>
      <Perritos
        lista={perritos}
        quitarFavorito={quitarFavorito}
        agregarFavorito={agregarFavorito}
      />
      <Favoritos lista={favoritos} quitarFavorito={quitarFavorito} />
    </div>
  );
}
