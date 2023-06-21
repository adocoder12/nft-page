import logoBoomerang from '@/img/logo/boomerang.png'
import logoBlimp from '@/img/logo/Vector.png'
import logoOpenDoor from '@/img/logo/openDoor.png'
import logoDoplet from '@/img/logo/doplk.png'
//Components
import SponsorItems from '../SponsorItems/index.jsx'

import './style.css'

const SponsorItemsList = () => {
  return (
    <section className="itemsWraper">
      <SponsorItems logo={logoBoomerang} text="Boomerang" />
      <SponsorItems logo={logoBlimp} text="Boomerang" />
      <SponsorItems logo={logoOpenDoor} text="Boomerang" />
      <SponsorItems logo={logoDoplet} text="Boomerang" />
    </section>
  )
}

export default SponsorItemsList
