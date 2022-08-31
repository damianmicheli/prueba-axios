import axios from "axios";

/* esta api key es necesaria para identificarnos en el servidor y que nos 
permita algunos metodos como POST o DELETE. 
Es posible generar una nueva API KEY accediendo a https://www.thedogapi.com/signup
es gratuita y solo requiere una direccion de mail para recibir la key
*/

const APIKEY =
  "live_h2SI9SCI5oxvJDwPMsGSzgveOmq84LoflDgwRIZk5O31QDYcZuZ4ac9s9FyoYLzk";

/* con axios.create puedo crear una instancia de axios con datos pre configurados
  (por ejemplo la URL base y la API KEY, de forma de no tener que repetirlo
    en todas las consultas a la API)*/

export default axios.create({
  baseURL: `https://api.thedogapi.com/v1/`,
  headers: { "x-api-key": APIKEY },
});
