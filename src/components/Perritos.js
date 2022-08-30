import React, { useEffect, useState } from "react";
import APIPERRITOS from "./api";
import Perrito from './Perrito'
import Favoritos from './Favoritos'

const Perritos = () => {
    const [perritos, setPerritos] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    APIPERRITOS
      .get(`images/search?limit=12`)
      .then((res) => {
        const perritos = res.data;
        setPerritos(perritos);
      });
  }, []);

  const agregarFavorito = (id) => {
    APIPERRITOS
      .post(
        "favourites",
        {"image_id": id}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(mostrarFavoritos());
  };

  const mostrarFavoritos = ()=>{
    APIPERRITOS
    .get(`favourites`)
    .then((res) => {
      const favoritos = res.data;
      setFavoritos(favoritos);
    });
  }

  const mostrarRandom = ()=>{
    APIPERRITOS
    .get(`images/search?limit=12`)
    .then((res) => {
      const perritos = res.data;
      setPerritos(perritos);
    });
  }

  return (
    <div className="">
      <button onClick={mostrarFavoritos}>Mostrar favoritos</button>
      <button onClick={mostrarRandom}>Mostrar mas perritos</button>
      {perritos.map((perrito, index) => (
        <Perrito key={index} id={perrito.id} url={perrito.url} agregarFavorito={agregarFavorito}/>
      ))}
      <Favoritos lista={favoritos}/>
    </div>
  );
};

export default Perritos;
