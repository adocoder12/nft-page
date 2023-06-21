import nft001 from '@/img/nft/Nft1.png'

//component
import Card from '../Card'
//style
import './style.css'

const nfts = [
  {
    image: nft001,
    name: 'nft-001',
    price: '2.92€',
    daysLeft: '10',
    number: '232221',
  },
]
const CardWithText = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, color, imageOnRight } = props
  return (
    <section
      className={`container-cardText  ${color} ${
        imageOnRight ? 'image-on-right' : ''
      }`}
    >
      {nfts.map((nft) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Card
            image={nft.image}
            name={nft.name}
            price={nft.price}
            daysLeft={nft.daysLeft}
            number={nft.number}
          />
        )
      })}

      <div className="text-wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default CardWithText
