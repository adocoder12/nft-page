/* eslint-disable react/prop-types */
import './style.css'
import Button from '../Button'

const Hero = (props) => {
  const { heroImage } = props
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-left-launching">Launching Soon</span>
        <h1 className="hero-left-heading">An NFT like no other</h1>
        <p>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live.
        </p>
        <Button className="hero-btn" text="Sign Up" />
      </div>
      <div className="hero-right">
        <div className="hero_image-wrapper">
          <img className="hero-image" src={heroImage} alt="logo" />
          <div className="hero_image-shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
