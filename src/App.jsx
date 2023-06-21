// import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SponsorItemsList from './components/SponsoItemsList'
import CardList from './components/CardList'
import CardWithText from './components/CardWithText'
import LogoWithText from './components/LogoWithText'
//imgs
import LogoEtherium from '@/img/logo/Logo3.png'

import hero_logo from '@/img/logo/nft2001.png'

import AppStyles from './App.module.css'

function App() {
  return (
    <div className={AppStyles.app}>
      <Header />
      {/* AppContainer */}
      <div className={AppStyles.container}>
        <Hero heroImage={hero_logo} />
        <SponsorItemsList />
        <CardWithText
          title="Initial Release 4/11"
          description=" We have released four limited edition NFTs early which can be bid on
          via OpenSea. These will be the only four of these NFTs we ever make,
          so be sure not to miss out! 50% of proceeds go to charity."
          color="green"
          imageOnRight={false}
        />
        <CardList />
        <CardWithText
          title="Initial Release 4/11"
          description=" We have released four limited edition NFTs early which can be bid on
          via OpenSea. These will be the only four of these NFTs we ever make,
          so be sure not to miss out! 50% of proceeds go to charity."
          color="orange"
          imageOnRight={true}
        />
        <div className={AppStyles.twoCardsWrapper}>
          <LogoWithText
            imagen={LogoEtherium}
            title="An NFT like no other"
            textPrimary="Dont miss out on the release of our new NFT. Sign up below to receive
        updates when we go live on 18/9."
            TextSecondary=" Dont miss out on the release of our new NFT. Sign up below to receive
        updates when we go live on 18/9.Dont miss out on the release of our new
        NFT."
          />
          <LogoWithText
            imagen={LogoEtherium}
            title="An NFT like no other"
            textPrimary="Dont miss out on the release of our new NFT. Sign up below to receive
        updates when we go live on 18/9."
            TextSecondary=" Dont miss out on the release of our new NFT. Sign up below to receive
        updates when we go live on 18/9.Dont miss out on the release of our new
        NFT."
          />
        </div>
      </div>
    </div>
  )
}

export default App
