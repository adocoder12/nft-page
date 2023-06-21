//imgs
import nft001 from '@/img/nft/Nft1.png'

//Css
import './style.css'
import Card from '../Card'
const nfts = [
  {
    image: nft001,
    name: 'nft-001',
    price: '2.92€',
    daysLeft: '10',
    number: '232221',
  },
  {
    image: nft001,
    name: 'nft-002',
    price: '3.92€',
    daysLeft: '14',
    number: '232220',
  },
  {
    image: nft001,
    name: 'nft-003',
    price: '4.92€',
    daysLeft: '15',
    number: '232222',
  },
  {
    image: nft001,
    name: 'nft-004',
    price: '10.92€',
    daysLeft: '18',
    number: '232222',
  },
]
const CardList = () => {
  return (
    <section className="card-list">
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
    </section>
  )
}

export default CardList
