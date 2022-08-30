import styles from './Perrito.module.css'
const Perrito = ({url, id, agregarFavorito}) =>{

const handleClick=() => {
  agregarFavorito(id)
}

return (        
  <div className={styles.card_perrito}>
    <img onDoubleClick={handleClick} src={url} width="200px" alt={"perrito id: " + id} />
</div>)
}

export default Perrito;