import './style.css'

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, number, name, price, daysLeft } = props
  return (
    <div className="card">
      <img src={image} className="nft-image" alt={` nft-card ${name}`} />
      <div className="card-details">
        <div className="card_details-series">Gloop series</div>
        <div className="card_details-bid">Top bid</div>
        <div className="card_details-name">{name}</div>
        <div className="card_details-price">{price}</div>
        <div className="card_details-number">{number}</div>
        <div className="card_details-left">{daysLeft}</div>
      </div>
    </div>
  )
}

export default Card
