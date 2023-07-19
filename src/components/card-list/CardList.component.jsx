import './CardList.styles.css'
import Card from '../card/Card.component'

// destructured prop
// implicit return
const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return (
        <Card monster={monster} />
      )})}
  </div>
)

export default CardList
