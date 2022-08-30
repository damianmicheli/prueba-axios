import Favorito from './Favorito'
const Favoritos = ({lista}) => {

  return (
<>
{lista.map((favorito, index) => (
  <Favorito key={index} id={favorito.image.id} url={favorito.image.url}/>
      ))}
</>
  )
}

export default Favoritos